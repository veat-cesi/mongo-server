import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.restaurant.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.food.deleteMany();
  await prisma.meal.deleteMany();

  const Vapiano = await prisma.restaurant.upsert({
    where: { email: "contact@vapiano.com" },
    update: {},
    create: {
      name: "Vapiano",
      email: "contact@vapiano.com",
      phone: "012345789",
      city: "Bordeaux",
      address: "264 Boulevard Godard",
      about:
        "The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.",
      tags: {
        createMany: {
          data: [
            { name: "Italian" },
            { name: "Pasta" },
            { name: "Pizza" },
            { name: "Salads" },
          ],
        },
      },
      food: {
        create: [
          {
            category: "Pasta 🍝",
            meals: {
              createMany: {
                data: [
                  {
                    name: "Arrabbiata",
                    price: 9.35,
                    info: "Tomato sauce, chilli, garlic, and onions",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/5.png",
                  },
                  {
                    name: "Pomodoro e Mozzarella",
                    price: 10.75,
                    info: "Tomato sauce, onions, mozzarella",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/6.png",
                  },
                ],
              },
            },
          },
          {
            category: "Pizza 🍕",
            meals: {
              createMany: {
                data: [
                  {
                    name: "Salame",
                    price: 11.35,
                    info: "Spicy Italian sausage, tomato sauce, mozzarella",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/7.png",
                  },
                  {
                    name: "Margherity",
                    price: 9.75,
                    info: "Tomato sauce, mozzarella",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/8.png",
                  },
                ],
              },
            },
          },
          {
            category: "Salad 🥗",
            meals: {
              createMany: {
                data: [
                  {
                    name: "Insalata Mista Piccola",
                    price: 5.99,
                    info: "Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/9.png",
                  },
                  {
                    name: "Insalata Mista della Casa",
                    price: 8.95,
                    info: "Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/10.png",
                  },
                ],
              },
            },
          },
        ],
      },
    },
  });

  const UrbanGreen = await prisma.restaurant.upsert({
    where: { email: "contact@urbangreen.com" },
    update: {},
    create: {
      name: "✨Urban Greens✨",
      email: "contact@urbangreen.com",
      phone: "123457890",
      city: "Bordeaux",
      address: "264 Boulevard Godard",
      about:
        "The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.",
      tags: {
        createMany: {
          data: [
            { name: "Italian" },
            { name: "Pasta" },
            { name: "Pizza" },
            { name: "Salads" },
          ],
        },
      },
      food: {
        create: [
          {
            category: "Pasta 🍝",
            meals: {
              createMany: {
                data: [
                  {
                    name: "Arrabbiata",
                    price: 9.35,
                    info: "Tomato sauce, chilli, garlic, and onions",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/5.png",
                  },
                  {
                    name: "Pomodoro e Mozzarella",
                    price: 10.75,
                    info: "Tomato sauce, onions, mozzarella",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/6.png",
                  },
                ],
              },
            },
          },
          {
            category: "Pizza 🍕",
            meals: {
              createMany: {
                data: [
                  {
                    name: "Salame",
                    price: 11.35,
                    info: "Spicy Italian sausage, tomato sauce, mozzarella",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/7.png",
                  },
                  {
                    name: "Margherity",
                    price: 9.75,
                    info: "Tomato sauce, mozzarella",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/8.png",
                  },
                ],
              },
            },
          },
          {
            category: "Salad 🥗",
            meals: {
              createMany: {
                data: [
                  {
                    name: "Insalata Mista Piccola",
                    price: 5.99,
                    info: "Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/9.png",
                  },
                  {
                    name: "Insalata Mista della Casa",
                    price: 8.95,
                    info: "Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.",
                    img: "https://devdactic.fra1.digitaloceanspaces.com/foodui/10.png",
                  },
                ],
              },
            },
          },
        ],
      },
    },
  });
  console.log({ Vapiano });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
