import { Nunito } from 'next/font/google'
import { relations } from 'drizzle-orm'
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
} from 'drizzle-orm/pg-core'

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  imageSrc: text('image_src').notNull(),
})

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
  units: many(units),
}))

export const units = pgTable('units', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  courseId: integer('course_id')
    .references(() => courses.id, { onDelete: 'cascade' })
    .notNull(),
  order: integer('order').notNull(),
})

export const unitsRelations = relations(units, ({ many, one }) => ({
  course: one(courses, {
    fields: [units.courseId],
    references: [courses.id],
  }),
  lessons: many(lessons),
}))

export const lessons = pgTable('lessons', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  unitId: integer('unit_id')
    .references(() => units.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  order: integer('order').notNull(),
})

export const challengesEnum = pgEnum('type', ['SELECT', 'ASSIST'])

export const challenges = pgTable('challenges', {
  id: serial('id').primaryKey(),
  lessonId: integer('lesson_id')
    .references(() => lessons.id, { onDelete: 'cascade' })
    .notNull(),
  type: challengesEnum('type').notNull(),
  question: text('question').notNull(),
  order: integer('order').notNull(),
})

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  unit: one(units, {
    fields: [lessons.unitId],
    references: [units.id],
  }),
  challenges: many(challenges),
}))

export const challengesRelations = relations(challenges, ({ one, many }) => ({
  lessons: one(lessons, {
    fields: [challenges.lessonId],
    references: [lessons.id],
  }),
  challengeOptions: many(challengeOptions),
}))

export const challengeOptions = pgTable('challengeOptions', {
  id: serial('id').primaryKey(),
  challengeId: integer('challenge_id')
    .references(() => challenges.id, { onDelete: 'cascade' })
    .notNull(),
  text: text('text').notNull(),
  correct: boolean('correct').notNull(),
  imageSrc: text('image_src'),
  audioSrc: text('audio_src'),
})

export const challengeOptionsRelations = relations(
  challengeOptions,
  ({ one }) => ({
    challenge: one(challenges, {
      fields: [challengeOptions.challengeId],
      references: [challenges.id],
    }),
  })
)

export const userProgress = pgTable('user_progress', {
  userId: text('user_id').primaryKey(),
  userName: text('user_name').notNull().default('User'),
  userImageSrc: text('user_image_src').notNull().default('/mascot.svg'),
  activeCourseId: integer('active_course_id').references(() => courses.id, {
    onDelete: 'cascade',
  }),
  hearts: integer('hearts').notNull().default(5),
  points: integer('points').notNull().default(0),
})

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}))
