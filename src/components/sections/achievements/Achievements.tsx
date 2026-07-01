'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  sectionTitleVariants,
  gridVariants,
  cardVariants,
  numberVariants,
  cardHoverVariants,
} from './Achievements.animations'
import { ACHIEVEMENTS, ACHIEVEMENT_COLORS } from './Achievements.constants'
import {
  achievementsSection,
  achievementsContainer,
  sectionTitle,
  highlightWord,
  highlightUnderline,
  achievementsGrid,
  achievementCard,
  cardIcon,
  cardNumber,
  cardDescription,
  decorativeBlob,
} from './Achievements.styles'
import type { AchievementsProps } from './Achievements.types'

function CountUpNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function Achievements({ className }: AchievementsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={`${achievementsSection} ${className ?? ''}`} ref={ref}>
      <div className={achievementsContainer}>
        <motion.h2
          className={sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionTitleVariants}
        >
          Чего достигают{' '}
          <span className={highlightWord}>
            наши дети
            <span className={highlightUnderline} />
          </span>
        </motion.h2>

        <motion.div
          className={achievementsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={gridVariants}
        >
          {ACHIEVEMENTS.map((achievement) => {
            const color = ACHIEVEMENT_COLORS[achievement.color]
            return (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className={`${achievementCard}`}
                  style={{
                    backgroundColor: `${color.bg}99`,
                    boxShadow: `0 4px 24px ${color.glow}`,
                  }}
                >
                  <div
                    className={decorativeBlob}
                    style={{
                      width: 120,
                      height: 120,
                      backgroundColor: color.bg,
                      top: -20,
                      right: -20,
                    }}
                  />
                  <motion.span
                    className={cardIcon}
                    variants={numberVariants}
                  >
                    {achievement.icon}
                  </motion.span>
                  <motion.div
                    className={cardNumber}
                    variants={numberVariants}
                  >
                    <CountUpNumber
                      target={achievement.value}
                      suffix={achievement.suffix}
                      inView={isInView}
                    />
                  </motion.div>
                  <p className={cardDescription}>{achievement.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
