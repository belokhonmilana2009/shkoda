export interface Achievement {
  id: number
  value: number
  suffix: string
  icon: string
  description: string
  color: 'mint' | 'teal' | 'blush' | 'yellow'
}

export interface AchievementsProps {
  className?: string
}
