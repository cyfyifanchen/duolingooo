import { challenges } from '@/db/schema'

type Props = {
  id: number
  imageSrc: string | null
  audioSrc: string | null
  text: string
  shortcut: string
  selected?: boolean
  disabled?: boolean
  onClick: () => void
  status?: 'correct' | 'wrong' | 'none'
  type: (typeof challenges.$inferSelect)['type']
}

export const Card = ({
  id,
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected,
  onClick,
  status,
  type,
  disabled,
}: Props) => {
  return <div className="">Card</div>
}
