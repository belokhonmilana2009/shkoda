import { cn } from '@/lib/cn'

export const programsSection = cn(
  'relative w-full py-24 px-4 bg-[#fcfaf5] overflow-hidden'
)

export const programsContainer = cn(
  'max-w-[1200px] mx-auto'
)

export const sectionTitle = cn(
  'text-center mb-16 font-[family-name:var(--font-bricolage)] font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#1a3300]'
)

export const highlightWord = cn(
  'relative inline-block'
)

export const highlightUnderline = cn(
  'absolute -bottom-2 left-0 w-full h-3 bg-[#ffe95c] -z-10 rounded-sm'
)

export const programsGrid = cn(
  'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
)

export const programCard = cn(
  'relative group cursor-pointer rounded-xl p-6 backdrop-blur-sm',
  'border border-white/40 transition-all duration-300',
  'flex flex-col items-center text-center'
)

export const cardIcon = cn(
  'text-5xl mb-4 transition-transform duration-300 group-hover:scale-110'
)

export const cardTitle = cn(
  'text-lg font-bold text-[#1a3300] mb-2 font-[family-name:var(--font-bricolage)]'
)

export const cardDescription = cn(
  'text-sm text-[#1a3300]/70 leading-relaxed'
)

export const cardGlow = cn(
  'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
)
