from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List, Dict, Any
import os

from langchain_ollama.llms import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate 
from vector import retriever

app = FastAPI(title="DineWise Pizza Review Assistant")

# Serve static files
os.makedirs("static", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Initialize LangChain & Ollama
try:
    model = OllamaLLM(model="llama3.2")
    template = """
You are an expert in answering questions about a pizza restaurant based on user reviews.
Please answer the question accurately, thoroughly, and nicely, referencing the reviews provided. Keep it engaging.

Here are some relevant reviews:
{reviews}

Here is the question to answer:
{question}
"""
    prompt = ChatPromptTemplate.from_template(template)
    chain = prompt | model 
except Exception as e:
    print(f"Error initializing LangChain/Ollama: {e}")
    chain = None

class QueryRequest(BaseModel):
    question: str

@app.get("/")
def get_index():
    return FileResponse("static/index.html")

@app.post("/api/query")
def query_reviews(request: QueryRequest):
    if not chain:
        raise HTTPException(status_code=500, detail="LLM chain not initialized. Please ensure Ollama is running.")
    
    question = request.question.strip()
    if not question:
        raise HTTPException(status_code=400, detail="Question cannot be empty.")
    
    try:
        # Retrieve relevant reviews using semantic search
        docs = retriever.invoke(question)
        
        # Compile source reviews list for the frontend
        source_reviews = []
        for d in docs:
            source_reviews.append({
                "content": d.page_content,
                "rating": d.metadata.get("rating"),
                "date": d.metadata.get("date")
            })
            
        # Get AI Answer
        result = chain.invoke({"reviews": docs, "question": question})
        
        return {
            "question": question,
            "answer": result,
            "reviews": source_reviews
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=1000)
