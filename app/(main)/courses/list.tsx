'use client'

import { courses } from '@/db/schema'

type Props = {
  courses: (typeof courses.$inferSelect)[]
  activeCourseId: number
}

export const List = ({}: Props) => {
  return <div className="pt-6 grid grid-cols-2">List</div>
}
