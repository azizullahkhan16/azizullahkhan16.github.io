'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { suggestedQuestions } from '@/data/suggested-questions'
import { profile } from '@/data/profile'

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void
}

export function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1
          className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2 font-heading"
        >
          Hi, I&apos;m {profile.name}
        </h1>
        <p className="text-[var(--muted-foreground)] text-sm sm:text-base">
          {profile.tagline}
        </p>
        <p className="text-[var(--muted-foreground)] text-sm mt-2 max-w-xs">
          Ask me anything about my background, research, or experience.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {suggestedQuestions.map((question, i) => (
          <motion.div
            key={question}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
          >
            <Button
              variant="outline"
              className="w-full text-left justify-start h-auto py-3 px-4 text-sm text-[var(--foreground)] hover:border-violet-500 hover:bg-violet-500/10 transition-all"
              onClick={() => onSelect(question)}
            >
              <span className="truncate">{question}</span>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
