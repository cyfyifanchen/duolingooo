import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { Header } from './header'
import { UserProgress } from '@/components/user-progress'
import { getCourses, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'

const LearnPage = async () => {
  const coursesData = getCourses()
  const userProgressData = getUserProgress()

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ])

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  )
}

export default LearnPage
