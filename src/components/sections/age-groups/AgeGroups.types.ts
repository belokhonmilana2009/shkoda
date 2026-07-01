export interface AgeStage {
  id: number
  icon: string
  ageRange: string
  description: string
  color: 'mint' | 'teal' | 'yellow' | 'blush' | 'terracotta'
}

export interface AgeGroupsProps {
  className?: string
}
