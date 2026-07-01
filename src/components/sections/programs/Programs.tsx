'use client'

import { motion } from 'framer-motion'
import {
  sectionTitleVariants,
  cardGridVariants,
  cardVariants,
  cardHoverVariants,
} from './Programs.animations'
import { PROGRAMS, COLOR_MAP } from './Programs.constants'
import {
  programsSection,
  programsContainer,
  sectionTitle,
  highlightWord,
  highlightUnderline,
  programsGrid,
  programCard,
  cardIcon,
  cardTitle,
  cardDescription,
} from './Programs.styles'
import type { ProgramsProps } from './Programs.types'

export function Programs({ className }: ProgramsProps) {
  return (
    <section className={`${programsSection} ${className ?? ''}`}>
      <div className={programsContainer}>
        <motion.h2
          className={sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionTitleVariants}
        >
          12 направлений{' '}
          <span className={highlightWord}>
            — один центр
            <span className={highlightUnderline} />
          </span>
        </motion.h2>

        <motion.div
          className={programsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardGridVariants}
        >
          {PROGRAMS.map((program) => {
            const colors = COLOR_MAP[program.color]
            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className={`${programCard} ${colors.bg} ${colors.border}`}
                  style={{
                    boxShadow: `0 4px 20px rgba(26, 51, 0, 0.06)`,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${program.color === 'mint' ? '#d5f5c2' : program.color === 'teal' ? '#a8e5e5' : program.color === 'blush' ? '#f6d0ff' : '#ffe95c'}80 0%, transparent 70%)`,
                    }}
                  />
                  <span className={cardIcon}>{program.icon}</span>
                  <h3 className={cardTitle}>{program.title}</h3>
                  <p className={cardDescription}>{program.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
