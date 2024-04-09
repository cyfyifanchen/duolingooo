'use client'

import Image from 'next/image'

type Props = {
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image
          src="/heart.svg"
          alt="Heart"
          height={60}
          width={60}
        />
      </div>
    </ul>
  )
}
