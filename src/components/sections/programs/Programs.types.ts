export interface Program {
  id: number
  icon: string
  title: string
  description: string
  color: 'mint' | 'teal' | 'blush' | 'yellow'
}

export interface ProgramsProps {
  className?: string
}
