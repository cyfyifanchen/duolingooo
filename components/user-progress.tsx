import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { InfinityIcon } from 'lucide-react'

type Props = {
  activeCourse: { imageSrc: string; title: string } // TODO; Replace with DB types
  hearts: number
  points: number
  hasActiveSUbscription: boolean
}
export const UserProgress = ({
  activeCourse,
  points,
  hearts,
  hasActiveSUbscription,
}: Props) => {
  return (
    <div className="flex item-center justify-between gap-x-2 w-full">
      <Link href="/courses"></Link>
      <Button variant="ghost">
        <Image
          src={activeCourse.imageSrc}
          alt={activeCourse.title}
          className="rounded-md border"
          width={32}
          height={32}
        />
      </Button>
      <Link href="/shop">
        <Button
          variant="ghost"
          className="text-orange-500"
        >
          <Image
            src="/points.svg"
            height={28}
            width={28}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button
          variant="ghost"
          className="text-rose-500"
        >
          <Image
            src="/heart.svg"
            height={22}
            width={22}
            alt="Hearts"
            className="mr-2"
          />
          {hasActiveSUbscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
          {points}
        </Button>
      </Link>
    </div>
  )
}
