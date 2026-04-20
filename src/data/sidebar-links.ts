export type SidebarLink = {
  label: string
  icon: string
  prompt: string
}

export const sidebarLinks: SidebarLink[] = [
  { label: 'About Me', icon: 'User', prompt: 'Tell me about yourself' },
  { label: 'Research', icon: 'FlaskConical', prompt: 'What research are you working on?' },
  { label: 'Experience', icon: 'Briefcase', prompt: "What's your work experience?" },
  { label: 'Skills', icon: 'Code2', prompt: "What's your tech stack?" },
  { label: 'Contact', icon: 'Mail', prompt: 'How can I reach you?' },
]
