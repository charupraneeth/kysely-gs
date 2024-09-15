import { db } from "./database";

const list = async () => {
  const courses = await db.selectFrom("course").selectAll("course").execute();
  console.log({ courses });
};

const create = async () => {
  const insertedCourse = await db
    .insertInto("course")
    .values({
      description: "Course 2 description",
      title: "Course 2",
      duration: 124,
    })
    .returningAll()
    .executeTakeFirst();

  console.log({ insertedCourse });
};

list();
// create();
