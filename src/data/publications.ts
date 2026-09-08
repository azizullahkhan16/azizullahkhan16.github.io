export interface Publication {
  type: string
  year: string
  title: string
  authors: string
  links: {
    pdf?: string
    project?: string
    code?: string
  }
}

// TODO: replace placeholders with real writeups (PDFs, project pages, arxiv preprints).
export const publications: Publication[] = [
  {
    type: 'Working note',
    year: '2026',
    title:
      'Deploying Langfuse behind a private endpoint on AKS: serving LLM observability without public egress.',
    authors: '<strong>A. Khan</strong>. Data Science Dojo internal design note.',
    links: { pdf: '#', project: '#' },
  },
  {
    type: 'Tech report',
    year: '2026',
    title: 'A zero-trust hub-spoke topology for multi-tenant LLM platforms.',
    authors: '<strong>A. Khan</strong>. Design note, Data Science Dojo Infrastructure.',
    links: { pdf: '#' },
  },
  {
    type: 'Course report',
    year: '2025',
    title:
      'Indus Sahulat: real-time coordination between hospitals, patients, and drivers in emergency response.',
    authors: '<strong>A. Khan</strong>. Final Year Project, IBA Karachi.',
    links: { pdf: '#', code: 'https://github.com/azizullahkhan16' },
  },
]
