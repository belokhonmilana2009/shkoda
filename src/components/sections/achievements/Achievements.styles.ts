import { cn } from '@/lib/cn'

export const achievementsSection = cn(
  'relative w-full py-24 px-4 bg-[#fcfaf5] overflow-hidden'
)

export const achievementsContainer = cn(
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

export const achievementsGrid = cn(
  'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
)

export const achievementCard = cn(
  'relative group cursor-pointer rounded-xl p-8 backdrop-blur-sm',
  'border border-white/50 transition-all duration-300',
  'flex flex-col items-center text-center'
)

export const cardIcon = cn(
  'text-4xl mb-3'
)

export const cardNumber = cn(
  'text-5xl md:text-6xl font-extrabold text-[#1a3300] mb-2 font-[family-name:var(--font-bricolage)]'
)

export const cardDescription = cn(
  'text-sm text-[#1a3300]/70 leading-relaxed max-w-[240px]'
)

export const decorativeBlob = cn(
  'absolute -z-10 rounded-full blur-3xl opacity-20'
)
