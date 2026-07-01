'use client'

import { motion } from 'framer-motion'
import {
  sectionTitleVariants,
  timelineContainerVariants,
  stageVariants,
  lineVariants,
  emojiVariants,
} from './AgeGroups.animations'
import { AGE_STAGES, STAGE_COLORS } from './AgeGroups.constants'
import {
  ageGroupsSection,
  ageGroupsContainer,
  sectionTitle,
  highlightWord,
  highlightUnderline,
  timelineWrapper,
  timelineLine,
  stagesContainer,
  stageNode,
  stageIconWrapper,
  stageIcon,
  stageAge,
  stageDescription,
} from './AgeGroups.styles'
import type { AgeGroupsProps } from './AgeGroups.types'

export function AgeGroups({ className }: AgeGroupsProps) {
  return (
    <section className={`${ageGroupsSection} ${className ?? ''}`}>
      <div className={ageGroupsContainer}>
        <motion.h2
          className={sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionTitleVariants}
        >
          Путь ребёнка{' '}
          <span className={highlightWord}>
            от 1 до 15 лет
            <span className={highlightUnderline} />
          </span>
        </motion.h2>

        <div className={timelineWrapper}>
          <motion.div
            className={timelineLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={lineVariants}
          />

          <motion.div
            className={stagesContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={timelineContainerVariants}
          >
            {AGE_STAGES.map((stage) => {
              const color = STAGE_COLORS[stage.color]
              return (
                <motion.div
                  key={stage.id}
                  className={stageNode}
                  variants={stageVariants}
                >
                  <motion.div
                    className={stageIconWrapper}
                    style={{ backgroundColor: color.bg }}
                    variants={emojiVariants}
                  >
                    <span className={stageIcon}>{stage.icon}</span>
                  </motion.div>
                  <span
                    className={stageAge}
                    style={{ color: color.text }}
                  >
                    {stage.ageRange}
                  </span>
                  <p
                    className={stageDescription}
                    style={{ color: color.text }}
                  >
                    {stage.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
