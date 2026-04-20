import type { Message, ChatSession } from '@/hooks/useChat'

export const prebuiltChats: ChatSession[] = [
  {
    id: 'prebuilt-llm-inference',
    title: 'LLM Inference Optimization',
    pinned: true,
    createdAt: 0,
    messages: [
      {
        id: 'pb-llm-1',
        role: 'user',
        content: "Can you walk me through your work on LLM inference optimization?",
      } as Message,
      {
        id: 'pb-llm-2',
        role: 'assistant',
        content: `Sure! LLM inference is one of my deepest technical interests — let me break down the key areas I've worked on.

**Quantization**

I've implemented and benchmarked INT8 and INT4 weight-only quantization using GPTQ and AWQ. The core insight is that not all weights are equally sensitive to precision loss — outlier channels in activations (as studied in LLM.int8()) can blow up quantization error if not handled separately. My benchmarks on LLaMA-2-7B showed ~1.9× throughput improvement with AWQ INT4 versus FP16, with less than 0.3 perplexity degradation on WikiText-2.

**Speculative Decoding**

I built a speculative decoding harness from scratch, pairing a small 125M draft model with a 7B target. The draft model proposes \`k\` tokens in parallel; the verifier accepts/rejects them in a single forward pass. Getting the acceptance rate right is tricky — you want drafts that are "good enough" without over-investing in the draft model. I tuned \`k=4\` as the sweet spot for my workload, yielding ~2.3× wall-clock speedup on reasoning-heavy prompts.

**KV Cache Optimizations**

Standard KV caches grow O(sequence_length) and blow up memory for long contexts. I implemented:
- **Multi-Query Attention (MQA)** — sharing a single K/V head across all Q heads, reducing KV memory by 8× on a model with 8 GQA groups
- **PagedAttention** — inspired by vLLM, managing KV cache in fixed-size blocks to eliminate fragmentation and allow dynamic batching

**Benchmarking Methodology**

I measure three metrics: time-to-first-token (TTFT), inter-token latency (ITL), and throughput (tokens/sec at target batch size). I use synthetic Poisson-arrival request traces to stress-test scheduling under load, and always report p50/p95/p99 latencies — p95 matters more than mean for interactive applications.`,
      } as Message,
      {
        id: 'pb-llm-3',
        role: 'user',
        content: "How did you handle memory bandwidth bottlenecks in practice?",
      } as Message,
      {
        id: 'pb-llm-4',
        role: 'assistant',
        content: `Memory bandwidth is the dominant bottleneck for autoregressive decoding — the GPU is almost always memory-bound, not compute-bound, because each token generation requires loading all model weights once.

**Profiling first**

I use \`nsys profile\` and \`ncu\` (Nsight Compute) to measure achieved memory bandwidth vs. theoretical peak. On an A100 80GB, peak HBM2e bandwidth is ~2 TB/s; a vanilla FP16 LLaMA-7B decode typically achieves only ~40% utilization due to kernel launch overhead and fragmented memory access patterns.

**Kernel fusion**

The biggest win came from fusing the attention + softmax + dropout + projection into a single kernel using FlashAttention-2. This avoids writing intermediate attention matrices to HBM entirely — keeping them in SRAM — which cut attention latency by ~3× for long sequences.

**Continuous batching**

Rather than static batch sizes, I implemented an iteration-level scheduler: as soon as one sequence in a batch finishes, a new request fills that slot immediately. This dramatically improves GPU utilization under heterogeneous prompt lengths, which is the real-world case for any API serving system.

**Prefill/decode disaggregation**

For high-throughput deployments, I experimented with separating prefill (compute-bound) and decode (memory-bound) onto different GPU pools — a technique now popularized by Splitwise and Distserve. Prefill benefits from large batch sizes and high FLOP utilization; decode benefits from small batches and fast KV transfer. The tradeoff is KV cache migration latency between nodes, which I mitigated with RDMA-based NVLink transfers.`,
      } as Message,
    ],
  },
  {
    id: 'prebuilt-why-ml-systems',
    title: 'Why ML Systems?',
    pinned: true,
    createdAt: 0,
    messages: [
      {
        id: 'pb-why-1',
        role: 'user',
        content: "Why did you choose ML Systems for your master's?",
      } as Message,
      {
        id: 'pb-why-2',
        role: 'assistant',
        content: `It came from a specific frustration I kept running into: I'd read a compelling paper — say, a new attention mechanism or a better optimizer — and then watch it take 18 months to show up in production systems, if it ever did. The gap between "this works in a research notebook" and "this runs reliably at scale" fascinated and frustrated me in equal measure.

**The hardware-software co-design angle**

What drew me to ML Systems specifically — rather than, say, pure ML theory or traditional systems — is that it sits exactly at that interface. Modern GPUs aren't general-purpose accelerators; they're designed with specific matrix multiply throughput targets in mind. If you don't understand how memory hierarchy, warp scheduling, and tensor core utilization interact with your model architecture, you're leaving significant performance on the table. I find that puzzle genuinely exciting.

**A concrete turning point**

The moment it crystallized for me was when I was trying to reproduce a paper's reported inference latency. I could get the math to work perfectly but was 4× slower than their numbers. Digging into it, I realized the difference was entirely in how they'd written their CUDA kernels — they were exploiting warp-level primitives that the PyTorch autograd graph never exposes. That sent me down a rabbit hole of CUDA programming, compiler internals, and hardware architecture that I haven't come out of since.

**Why a master's now**

I want structured access to cutting-edge research environments, better hardware than I can personally afford, and collaborators who care about the same problems. I'm particularly drawn to programs where systems and ML groups overlap — places working on compiler backends for ML (like MLIR/XLA), efficient training at scale, or inference serving infrastructure. That's where I think the highest-leverage work is happening right now.`,
      } as Message,
      {
        id: 'pb-why-3',
        role: 'user',
        content: "What specific research directions are you most excited about pursuing?",
      } as Message,
      {
        id: 'pb-why-4',
        role: 'assistant',
        content: `A few directions I keep coming back to:

**1. Sparse and structured computation**

Most LLM activations are sparse in practice — most neurons fire near zero most of the time. But current hardware doesn't exploit this because unstructured sparsity maps poorly to tensor cores. I'm excited about work on *structured* sparsity (N:M patterns, block sparsity) that can be accelerated by hardware, and on dynamic routing networks where computation genuinely scales with input complexity rather than being fixed.

**2. Disaggregated and heterogeneous inference**

As models grow, no single accelerator fits the whole model. I want to study how to partition models across heterogeneous hardware (fast HBM GPUs for attention, cheaper DRAM-based accelerators for FFN layers), minimize communication overhead, and build schedulers that are aware of both latency SLOs and hardware topology.

**3. Compiler-level optimization**

There's a huge gap between "write a PyTorch model" and "get optimal hardware utilization." Tools like torch.compile, Triton, and MLIR are closing this gap, but there's still enormous room for better operator fusion, memory layout optimization, and automatic kernel generation. I'd love to work on the compiler stack that makes ML code portable across hardware without sacrificing performance.

**4. Training efficiency**

Mixed-precision training, gradient checkpointing, and pipeline parallelism are well-understood — but I think there's underexplored territory in *adaptive* training: dynamically adjusting precision, sparsity, or even model architecture during training based on gradient signal. That intersection of optimization theory and systems implementation is where I want to contribute.`,
      } as Message,
    ],
  },
  {
    id: 'prebuilt-research-projects',
    title: 'Research & Projects',
    pinned: true,
    createdAt: 0,
    messages: [
      {
        id: 'pb-proj-1',
        role: 'user',
        content: "Can you give me a deep dive on your research projects?",
      } as Message,
      {
        id: 'pb-proj-2',
        role: 'assistant',
        content: `Happy to go deep on these. Here are three projects that best represent my work:

---

**1. Custom Fused CUDA Kernel for Grouped-Query Attention**

Standard PyTorch GQA implementations issue separate kernels for Q, K, V projections, then a batched matrix multiply, then softmax, then another matmul. Each kernel launch has overhead and each intermediate result gets written to HBM.

I wrote a fused CUDA kernel in Triton that computes the entire attention operation in a single pass, keeping Q·K^T in SRAM. Key implementation details:
- Tile size tuned to L2 cache capacity (128×64 tiles for A100)
- Warp-level reduction for softmax normalization using \`__shfl_xor_sync\`
- Causal masking applied inline via a predicated store, avoiding a separate kernel

**Result:** 2.8× latency reduction vs. PyTorch baseline for sequence length 4096, batch size 16. Memory footprint for the attention operation dropped by ~60% because we never materialize the full N×N attention matrix.

---

**2. ZeRO-Offload Distributed Training Optimizer**

For fine-tuning a 13B model on a 4×A100 node (80GB each), ZeRO-3 shards optimizer states, gradients, and parameters across GPUs. But with large batch sizes, the all-gather operations for parameters dominate communication time.

I implemented an **overlap-aware gradient bucketing** scheme: rather than waiting for all gradients to accumulate before firing all-reduce, I sort parameters by their typical gradient update time (estimated via profiling) and bucket them so that all-reduce for early-finishing layers overlaps with backward pass computation on later layers.

**Result:** 34% reduction in per-step time on a 13B LLaMA fine-tuning run vs. stock ZeRO-3, measured over 1000 steps. The approach is adaptive — bucket boundaries shift based on a running EWMA of per-layer backward time.

---

**3. LLM Inference Serving System with Adaptive Batching**

I built a minimal inference server (roughly 2,000 lines of Python + CUDA) with:
- **Continuous batching** at the iteration level, not request level
- **Preemptive scheduling** — long requests can be paused and their KV cache swapped to CPU DRAM when a latency-sensitive request arrives
- **Token budget enforcement** — each request carries a max-token contract; the scheduler uses this to predict queue drain time and admit/reject new requests

**Benchmarks vs. a naive batching server:**
| Metric | Naive | My system |
|---|---|---|
| p50 TTFT | 124ms | 41ms |
| p99 TTFT | 2.1s | 310ms |
| Throughput (tok/s) | 1,840 | 3,120 |

The p99 improvement is the result I'm most proud of — the naive system occasionally queues a short request behind a 2048-token decode, causing multi-second waits. Preemption eliminates that tail.`,
      } as Message,
      {
        id: 'pb-proj-3',
        role: 'user',
        content: "Which of these projects taught you the most, and what would you do differently?",
      } as Message,
      {
        id: 'pb-proj-4',
        role: 'assistant',
        content: `The inference serving system taught me the most — not because it was the most technically exotic, but because it forced me to think like a systems engineer rather than an ML researcher.

**What I learned**

The hardest part wasn't the scheduling algorithm; it was *correctness under concurrency*. I had subtle bugs where a request's KV cache blocks would be freed while the request was still being preempted and re-queued. Catching these required writing a deterministic replay harness that could reproduce race conditions — something I'd never had to do before. That experience made me much more careful about shared mutable state and lock granularity.

I also learned that **profiling lies if you don't control your environment carefully**. My first round of benchmarks looked great, but I'd accidentally left the CUDA memory pool in a fragmented state from a previous run, which inflated my baseline numbers. I now always reset the allocator and run a warmup pass before recording any measurements.

**What I'd do differently**

Three things:

1. **Design for observability from the start.** I bolted on metrics (latency histograms, queue depth, batch size distributions) after the core was built. If I'd instrumented the critical paths from day one, I would have found the preemption bug weeks earlier.

2. **Use a proper tensor memory manager.** My ad-hoc block allocator works, but reimplementing PagedAttention's block table logic from scratch introduced unnecessary bugs. I'd use or extend an existing allocator (like vLLM's) rather than writing my own.

3. **Test with realistic traffic, not just synthetic load.** My Poisson-arrival simulator was too clean — real LLM API traffic has heavy-tailed prompt lengths and bursty arrival patterns. When I finally tested against a replay of real-ish traces, throughput dropped ~15% because my admission control was tuned for the synthetic distribution. Always test with the hardest case, not the average case.`,
      } as Message,
    ],
  },
]
