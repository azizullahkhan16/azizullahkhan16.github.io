export type Intent = {
  id: string
  keywords: string[]
  response: string
}

export const intents: Intent[] = [
  {
    id: 'about',
    keywords: ['who', 'about', 'introduce', 'yourself', 'background', 'you', 'tell', 'name'],
    response: `## About Me

Hi! I'm **Azizullah Khan**, a researcher passionate about making large language models faster, cheaper, and more accessible.

I'm currently applying for a Masters program focused on **ML Systems and LLM Infrastructure** — the engineering layer that makes AI actually work at scale.

> *"The best model is the one that runs."*

I believe the future of AI isn't just about bigger models — it's about smarter systems.`,
  },
  {
    id: 'research',
    keywords: ['research', 'project', 'paper', 'llm', 'ml', 'systems', 'infrastructure', 'working', 'work'],
    response: `## Research Projects

### LLM Inference Optimization
Exploring techniques to reduce inference latency for large transformer models, including speculative decoding and KV-cache optimization.

### Distributed Training Pipeline
Built a fault-tolerant training pipeline using PyTorch FSDP for multi-GPU setups, reducing training time by ~30%.

### Retrieval-Augmented Generation
Investigated hybrid retrieval strategies for RAG systems, improving factual accuracy on domain-specific QA benchmarks.

*All projects are available on my GitHub.*`,
  },
  {
    id: 'experience',
    keywords: ['experience', 'work', 'internship', 'job', 'industry', 'company', 'career', 'history'],
    response: `## Work Experience

### ML Engineer Intern — [Company Name]
*Summer 2024*
- Optimized model serving pipeline, reducing p99 latency by 40%
- Implemented quantization (INT8) for production LLM endpoints
- Collaborated with research team on evaluation frameworks

### Research Assistant — [University Lab]
*2023 – Present*
- Investigating efficient attention mechanisms for long-context models
- Maintaining experiment tracking with W&B and reproducible training configs

### Software Engineer Intern — [Company Name]
*Summer 2023*
- Built data ingestion pipelines processing 10M+ daily events`,
  },
  {
    id: 'skills',
    keywords: ['skills', 'stack', 'tools', 'tech', 'frameworks', 'languages', 'python', 'use', 'know'],
    response: `## Tech Stack

**Languages**
\`Python\` \`C++\` \`CUDA\` \`TypeScript\`

**ML / AI**
\`PyTorch\` \`Transformers (HF)\` \`vLLM\` \`TensorRT-LLM\` \`DeepSpeed\`

**Infrastructure**
\`SLURM\` \`Docker\` \`Kubernetes\` \`Ray\`

**Experimentation**
\`Weights & Biases\` \`MLflow\` \`HuggingFace Hub\`

**General**
\`Git\` \`Linux\` \`SQL\` \`FastAPI\``,
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'linkedin', 'reach', 'hire', 'connect', 'github', 'find', 'social'],
    response: `## Get In Touch

I'm always open to research collaborations, interesting problems, and good conversations about ML systems.

**Email:** [you@example.com](mailto:you@example.com)

**LinkedIn:** [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)

**GitHub:** [github.com/yourusername](https://github.com/yourusername)

**Google Scholar:** *coming soon*

Feel free to reach out — I usually respond within 24 hours.`,
  },
  {
    id: 'why-ml',
    keywords: ['why', 'motivation', 'passion', 'interest', 'chose', 'systems', 'reason', 'masters', 'phd'],
    response: `## Why ML Systems?

Most people focus on *what* models can do. I'm obsessed with *how* they do it — and how to make them do it better.

I got hooked when I realized that a well-optimized inference stack can make a 7B parameter model outperform a 70B one in real-world latency constraints. **The systems layer is where theory meets reality.**

A Masters in this space means:
- Working on problems that directly impact how AI is deployed globally
- Publishing research at the intersection of systems and ML
- Building the infrastructure the next generation of models will run on

*I don't just want to use LLMs — I want to build the systems that make them possible.*`,
  },
]
