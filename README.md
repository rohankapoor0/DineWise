# DineWise | Pizza Restaurant Review Insider

DineWise is a web application that transforms local review analysis into actionable restaurant intelligence. Powered by a local Retrieval-Augmented Generation (RAG) pipeline, DineWise synthesizes thousands of restaurant customer reviews on-demand to answer nuanced culinary questions instantly.

---

## Features

*   **Local AI Synthesis Engine**: Integrates seamlessly with **LangChain** and **Ollama (Llama 3.2)** to synthesize raw customer opinions into structured insights.
*   **Vector Search Semantic Retrieval**: Utilizes **ChromaDB** with `mxbai-embed-large` embeddings to fetch the top 5 most relevant customer reviews containing specific contextual answers.
*   **Dynamic Quick Suggestions**: Interactive, curated suggestion links trigger instant AI reports.
*   **Custom Review Cards**: Custom-rendered source rating stars and dates accompany the synthesized AI insight, preserving full transparency of backing source data.

---

## Technology Stack

*   **Backend**: Python, FastAPI, Uvicorn
*   **AI Engine**: LangChain, Ollama (`llama3.2`)
*   **Vector Database**: ChromaDB
*   **Embeddings Model**: `mxbai-embed-large` (Local Ollama Embeddings)
*   **Frontend**: HTML5, Vanilla JS, Tailwind CSS, Google Material Symbols

---

## Quick Start

### 1. Prerequisites
Make sure [Ollama](https://ollama.com/) is installed and running locally, then pull the necessary models:
```bash
# Pull the Llama 3.2 model for general synthesis
ollama pull llama3.2

# Pull the embeddings model
ollama pull mxbai-embed-large
```

### 2. Installation & Setup
Install the dependencies:
```bash
# Activate the virtual environment
.\venv\Scripts\activate

# Install packages
pip install -r requirements.txt
```

### 3. Run the Web App
Launch the FastAPI backend server on **port 1000**:
```bash
.\venv\Scripts\python -m uvicorn app:app --port 1000 --host 127.0.0.1 --reload
```
Now, open your browser and navigate to **`http://localhost:1000`** to ask about the perfect slice!

---

## Repository Structure
```text
├── app.py                     # FastAPI backend server exposing /api/query
├── vector.py                  # RAG retrieval logic & ChromaDB integrations
├── main.py                    # Original fallback terminal-based CLI application
├── static/
│   ├── index.html             # High-fidelity Stitch custom UI layout
│   ├── index.js               # Frontend Client API handling & rating renderer
│   └── index.css              # Custom layout sheets & utility styles
└── realistic_restaurant_reviews.csv   # The underlying database dataset
```
