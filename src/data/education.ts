export interface Education {
  degree: string
  institution: string
  dates: string
  gpa?: string
  honors?: string[]
  coursework?: string[]
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Institute of Business Administration, Karachi',
    dates: 'Aug 2021 — May 2025',
    gpa: '3.76 / 4.0',
    honors: ["Dean's List"],
  },
]
