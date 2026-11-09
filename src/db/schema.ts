import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  ip: varchar('ip', {length:16}),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  number: varchar('number', {length: 20}),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow(),
});
