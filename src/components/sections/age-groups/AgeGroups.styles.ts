import { cn } from '@/lib/cn'

export const ageGroupsSection = cn(
  'relative w-full py-28 px-4 overflow-hidden',
  'bg-gradient-to-br from-[#fcfaf5] via-[#fcfaf5] to-[#d5f5c2]/30'
)

export const ageGroupsContainer = cn(
  'max-w-[1200px] mx-auto'
)

export const sectionTitle = cn(
  'text-center mb-20 font-[family-name:var(--font-bricolage)] font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#1a3300]'
)

export const highlightWord = cn(
  'relative inline-block'
)

export const highlightUnderline = cn(
  'absolute -bottom-2 left-0 w-full h-3 bg-[#ffe95c] -z-10 rounded-sm'
)

export const timelineWrapper = cn(
  'relative flex flex-col items-center'
)

export const timelineLine = cn(
  'absolute top-[52px] left-0 right-0 h-1 bg-gradient-to-r from-[#d5f5c2] via-[#ffe95c] to-[#cb5521] rounded-full origin-left'
)

export const stagesContainer = cn(
  'relative flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-4'
)

export const stageNode = cn(
  'relative z-10 flex flex-col items-center text-center w-full md:w-[180px]'
)

export const stageIconWrapper = cn(
  'w-[104px] h-[104px] rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110'
)

export const stageIcon = cn(
  'text-5xl'
)

export const stageAge = cn(
  'text-sm font-bold text-[#1a3300] mb-1 font-[family-name:var(--font-bricolage)] uppercase tracking-wide'
)

export const stageDescription = cn(
  'text-xs text-[#1a3300]/70 leading-relaxed max-w-[160px]'
)

export const stageDot = cn(
  'hidden md:block w-4 h-4 rounded-full border-4 border-white shadow-sm absolute -bottom-2 left-1/2 -translate-x-1/2'
)
