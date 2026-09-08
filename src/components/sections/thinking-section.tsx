import { Section } from '@/components/section'
import { questions, thinkingLede } from '@/data/thinking'

export function ThinkingSection() {
  return (
    <Section id="thinking" index="01" title="thinking">
      <h2 className="eyebrow">Open questions I&apos;m chasing.</h2>
      <p className="thinking-lede" dangerouslySetInnerHTML={{ __html: thinkingLede }} />
      {questions.map((q) => (
        <div key={q.label} className="q-block">
          <div className="q-label">{q.label}</div>
          <div className="q-body">
            <span dangerouslySetInnerHTML={{ __html: q.body }} />
            <span className="tag">{q.tag}</span>
          </div>
        </div>
      ))}
    </Section>
  )
}
