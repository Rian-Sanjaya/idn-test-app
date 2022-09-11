// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

type Data = {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  jobType: string;
  following: string;
  followers: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const profile = {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobType: faker.name.jobType(),
    following: faker.finance.amount(1, 9999, 0, '', true),
    followers: faker.finance.amount(1, 9999, 0, '', true),
  }
  res.status(200).json(profile);
}
