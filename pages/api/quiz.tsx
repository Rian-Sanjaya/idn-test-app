import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";
import { getRandomArray, shuffleArray } from "../../src/helpers/arrayFunctions";

type Data = {
  id: string;
  plays: string;
  headlineText: string;
  category: string;
  image: string;
};

const headlineText = [
  "Antara Victor dan Alden MCI 9, Kami Tahu Siapa yang Naksir",
  "Dari Cita-cita Masa Kecil, Kami Tahu Apa Rahasia Terdalammu",
  "Kuis Gambar Ini Bisa Ungkap Apa Ranah Profesimu",
  "Dari Golongan Darah, Kamu Bakal Jadi Bridesmaid atas",
  "Dari Drama Korea Bae Suzy, Kami Tahu Wisata Honeymoon Mengasikan",
  "Dari Tipe Cowok Idaman, Kami Tahu Member TXT yang akan",
  "Dari Tanggal Kelahirannya, Kami Tahu Alasan Pasangan itu",
  "Antara Bright dan Win, Ini Teman Sebangkumu Berdasarkan",
];

const mockData: Array<Data> = [];

for (let i = 0; i < 8; i++) {
  mockData.push({
    id: faker.datatype.uuid(),
    plays: "11.234",
    headlineText: headlineText[i],
    category: "Education",
    image: faker.image.image(),
  });
}

shuffleArray(mockData);

for (let i = 0; i < 2; i++) {
  mockData.push({
    id: faker.datatype.uuid(),
    plays: "11.234",
    headlineText: faker.lorem.sentence(),
    category: "Education",
    image: faker.image.image(),
  });
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>,
) {
  res.status(200).json(mockData);
}
