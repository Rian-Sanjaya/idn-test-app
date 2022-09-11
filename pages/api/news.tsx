// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";
import { getRandomArray, shuffleArray } from "../../src/helpers/arrayFunctions";

type Data = {
  id: string;
  date: Date;
  headlineText: string;
  category: string;
  image: string;
};

const categories = ["Bisnis", "Health", "Life"];

const mockData = [
  {
    id: faker.datatype.uuid(),
    date: faker.date.recent(1),
    headlineText: "Ini Kunci untuk Terjun ke NFT, Jangan Asal Ikut-Ikutan!",
    category: getRandomArray(categories),
    image: faker.image.business(112, 84),
  },
  {
    id: faker.datatype.uuid(),
    date: faker.date.recent(1),
    headlineText:
      "Salip Astra, Kapitalisasi Pasar Bank Jago Merangsek Ke Lima Besar Dalam",
    category: getRandomArray(categories),
    image: faker.image.abstract(112, 84),
  },
  {
    id: faker.datatype.uuid(),
    date: faker.date.recent(1),
    headlineText: "Insecure: Jenis, Penyebab, Faktor Risiko, dan Penanganan",
    category: getRandomArray(categories),
    image: faker.image.city(112, 84),
  },
  {
    id: faker.datatype.uuid(),
    date: faker.date.recent(1),
    headlineText:
      "Ini 3 Tema Ekonomi Digital yang Diusung di G20 Presidensi Indonesia",
    category: getRandomArray(categories),
    image: faker.image.fashion(112, 84),
  },
  {
    id: faker.datatype.uuid(),
    date: faker.date.recent(1),
    headlineText:
      "Panggil Para Dewa, Umat Tionghoa Terbangkan Uang Arwah di Gedung Rasa Dalam",
    category: getRandomArray(categories),
    image: faker.image.food(112, 84),
  },
];

shuffleArray(mockData);

for (let i = 0; i < 5; i++) {
  mockData.push({
    id: faker.datatype.uuid(),
    date: faker.date.recent(1),
    headlineText: faker.lorem.sentence(),
    category: getRandomArray(categories),
    image:
      i === 0
        ? faker.image.image(112, 84)
        : i === 1
        ? faker.image.nature(112, 84)
        : i === 2
        ? faker.image.nightlife(112, 84)
        : i === 3
        ? faker.image.sports(112, 84)
        : faker.image.technics(112, 84),
  });
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>,
) {
  res.status(200).json(mockData);
}
