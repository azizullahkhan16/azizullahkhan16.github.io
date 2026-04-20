# Azizullah Khan — Portfolio

A conversational AI-style portfolio built with Next.js, styled after Claude and Gemini. Visitors interact with the site through a chat interface that responds with information about my background, research, and experience.

**Live site:** [azizullahkhan16.github.io](https://azizullahkhan16.github.io)

## Stack

- **Framework:** Next.js 16 (static export)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages via GitHub Actions

## Features

- Chat interface with streaming text responses
- Prebuilt conversation threads for About, Research, Experience, Skills, and Contact
- Persistent chat sessions with rename and delete
- Shareable chat URLs via `?q=` parameter
- Dark mode first, mobile responsive
- Collapsible sidebar with recent chats

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

All personal content lives in [`src/data/`](src/data/):

| File | Purpose |
|------|---------|
| `profile.ts` | Name, tagline, avatar, links |
| `responses.ts` | Chat response content |
| `prebuilt-chats.ts` | Prebuilt conversation threads |
| `sidebar-links.ts` | Navigation sections |
| `suggested-questions.ts` | Suggested prompts on the home screen |

## Deployment

Pushes to `master` automatically deploy via GitHub Actions. Make sure GitHub Pages is set to **GitHub Actions** as the source in repo settings.
