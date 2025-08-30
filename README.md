# LLM Agent POC — Browser Multi-Tool Reasoning

This repo is a **proof-of-concept (POC)** LLM-powered agent that runs fully in the browser.

## ✨ Features
- Browser UI (Bootstrap)
- Model picker (choose LLM provider/model)
- LLM agent loop (OpenAI-style function calls)
- Three working tools:
  1. **Google Search snippets** (via proxy)
  2. **AI Pipe API** (via proxy)
  3. **JS Code Execution** (sandboxed iframe)

## 📂 File Structure
├── index.html # Core browser app
├── server.js # Optional proxy for Google Search + AI Pipe
└── README.md
