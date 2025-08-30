# LLM Agent POC — Browser Multi-Tool Reasoning

[Live Demo](https://tejaswini050302.github.io/llm-agent-poc/)

A minimalist proof-of-concept LLM agent built entirely in-browser with JavaScript and Bootstrap. It supports dynamic tool-calling and loops until tasks are complete.

---

##  Features

- **Chat-based interaction**: Submit prompts via a clean UI with model selection.
- **Tool integrations** (via backend proxy):
  - `search`: Web snippet search (optional).
  - `aipipe`: Calls an AI workflow endpoint.
  - `js_exec`: Safely executes JavaScript code in a sandboxed iframe.
- **Reasoning loop**: Automatically handles tool calls and feeds results back to the LLM.
- **Error handling**: Displays alerts for issues or failed API calls.

---


