import { challenges } from '@/db/schema'
import { cn } from '@/lib/utils'

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
  return (
    <div
      className={cn(
        'h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2'
      )}
      onClick={() => {}}
    >
      Card
    </div>
  )
}
