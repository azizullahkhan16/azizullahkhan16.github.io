export interface NewsItem {
  date: string
  kind: string
  text: string
}

export const news: NewsItem[] = [
  {
    date: 'Apr 2026',
    kind: 'Cert',
    text: 'Completed AZ-400: Azure DevOps Engineer Expert.',
  },
  {
    date: 'Jan 2026',
    kind: 'Promotion',
    text: 'Promoted to Software Engineer I, Infrastructure at Data Science Dojo.',
  },
  {
    date: 'Aug 2025',
    kind: 'Joining',
    text: 'Joined Data Science Dojo as Associate Software Engineer II on the Infrastructure team.',
  },
  {
    date: 'May 2025',
    kind: 'Milestone',
    text: 'Graduated BS Computer Science, IBA Karachi — magna cum laude, 3.76 GPA.',
  },
  {
    date: 'May 2024',
    kind: 'Promotion',
    text: 'Promoted to Junior Backend Developer at Salsoft Technologies.',
  },
  {
    date: 'Jan 2024',
    kind: 'Joining',
    text: 'Started as Backend Intern at Salsoft Technologies.',
  },
]
