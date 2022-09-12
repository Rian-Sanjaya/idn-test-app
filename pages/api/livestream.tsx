import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";
import { getRandomArray, shuffleArray } from "../../src/helpers/arrayFunctions";

type Data = {
  id: string;
  type: string;
  headlineText: string;
  category: string;
  image: string;
};

const type = ["Clip", "Terjadwal"];
const categories = ["Music", "Comedy", "Inspirasi", "Game"];

const mockData = [
  {
    id: faker.datatype.uuid(),
    type: getRandomArray(type),
    headlineText: "Nyanyi-nyanyi malem enak nih",
    category: getRandomArray(categories),
    image: faker.image.image(),
  },
  {
    id: faker.datatype.uuid(),
    type: getRandomArray(type),
    headlineText: "Ngelucu dulu ah biar seneng gitu",
    category: getRandomArray(categories),
    image: faker.image.image(),
  },
  {
    id: faker.datatype.uuid(),
    type: getRandomArray(type),
    headlineText: "Curhat yuk sapa tau bisa lega",
    category: getRandomArray(categories),
    image: faker.image.image(),
  },
  {
    id: faker.datatype.uuid(),
    type: getRandomArray(type),
    headlineText: "Cobain Roblox bareng yuk",
    category: getRandomArray(categories),
    image: faker.image.image(),
  },
];

shuffleArray(mockData);

for (let i = 0; i < 6; i++) {
  mockData.push({
    id: faker.datatype.uuid(),
    type: getRandomArray(type),
    headlineText: faker.lorem.words(4),
    category: getRandomArray(categories),
    image: faker.image.image(),
  });
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>,
) {
  res.status(200).json(mockData);
}