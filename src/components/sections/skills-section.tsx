import { Fragment } from 'react'
import { Section } from '@/components/section'
import { stack } from '@/data/skills'

export function SkillsSection() {
  return (
    <Section id="stack" index="05" title="stack">
      <h2 className="eyebrow">The stack, layer by layer.</h2>
      <p className="lede">
        Shown as I actually reach for it — from the cloud fabric at the bottom to the
        observability that watches it from above.
      </p>
      <div className="stack-diagram">
        {stack.map((layer, i) => (
          <Fragment key={layer.layerNumber}>
            <div className="layer">
              <div className="layer-label">
                <span className="n">
                  {layer.layerNumber} · {layer.category}
                </span>
                <span className="name">{layer.layerName}</span>
              </div>
              <div className="items">
                {layer.items.map((item) => (
                  <span key={item}>
                    {item}
                    {layer.primaryItem === item && <em> primary</em>}
                  </span>
                ))}
              </div>
            </div>
            {i < stack.length - 1 && <div className="arrow-down" />}
          </Fragment>
        ))}
      </div>
    </Section>
  )
}
