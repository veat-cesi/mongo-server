import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  const restaurant = await prisma.restaurant.findMany();
  console.log(restaurant);
  const tag = await prisma.tag.findMany();
  console.log(tag);
  const meal = await prisma.meal.findMany();
  console.log(meal);

  await prisma.restaurant.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.food.deleteMany();
  await prisma.meal.deleteMany();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
