export interface Publication {
  type: string
  year: string
  title: string
  authors: string
  summary?: string
  links: {
    pdf?: string
    project?: string
    code?: string
    doi?: string
  }
}

export const publications: Publication[] = [
  {
    type: 'Preprint',
    year: '2026',
    title:
      'Below the Granularity Floor: Measuring Python Multiprocessing Overhead in Shortest-Path Algorithms',
    authors: '<strong>A. Khan</strong>, A. Iqbal, H. Ahmed. Zenodo, 2026.',
    summary:
      'A controlled study of when Python’s multiprocessing actually pays off for graph algorithms. Across Dijkstra, Bellman–Ford, and A*, naive parallelism only loses; the paper locates the break-even point at roughly a millisecond of work per task and turns it into a rule you can apply before writing any parallel code. Every result is checked against NetworkX and reproducible from a single command.',
    links: {
      doi: 'https://doi.org/10.5281/zenodo.23002316',
      project: 'https://zenodo.org/records/23002316',
      code: 'https://github.com/azizullahkhan16/parallel-sssp-experiments',
    },
  },
  {
    type: 'Preprint',
    year: '2026',
    title:
      'Where Should a Hash Function Live? Measuring Kernel, User-Space, and System-Call Costs for SHA-256 on xv6-riscv',
    authors: '<strong>A. Khan</strong>, A. Iqbal. Zenodo, 2026.',
    summary:
      'Implements SHA-256 three ways on the xv6-riscv teaching OS — in the kernel, as a user-space library, and behind a dedicated system call — and measures what each placement really costs. The finding runs against intuition: the gap is dominated by process-creation cost, not the system-call boundary, so a well-written system call is nearly free. Closes with a concrete rule for choosing where a primitive should live.',
    links: {
      doi: 'https://doi.org/10.5281/zenodo.23002506',
      project: 'https://zenodo.org/records/23002506',
    },
  },
  {
    type: 'Final-year project',
    year: '2025',
    title:
      'Indus Sahulat: real-time emergency ambulance dispatch for Indus Hospital & Health Network.',
    authors:
      'Team FYP (IBA Karachi) with <strong>A. Khan</strong>, S. M. I. Zaidi, M. H. Farooq, M. T. Samji, S. Alam. Supervised by <strong>Dr. S. Haider</strong>.',
    summary:
      'A system that lets patients alert nearby hospitals, dispatches ambulances, and tracks them live so medical teams are ready on arrival.',
    links: {
      pdf: '/Indus_Sahulat_Final_Report.pdf',
      code: 'https://github.com/azizullahkhan16/indus-sahulat-backend',
    },
  },
]
