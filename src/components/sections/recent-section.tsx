import { Section } from '@/components/section'
import { news } from '@/data/news'

export function RecentSection() {
  if (news.length === 0) return null
  return (
    <Section id="recent" index="07" title="recent">
      <h2 className="eyebrow">Recent, dated.</h2>
      <p className="lede">Small updates so the site doesn&apos;t look abandoned. Most recent first.</p>
      {news.map((item, i) => (
        <div key={`${item.date}-${i}`} className="news-item">
          <div className="news-date">{item.date}</div>
          <div className="news-text">
            <span className="kind">{item.kind}</span>
            {item.text}
          </div>
        </div>
      ))}
    </Section>
  )
}
