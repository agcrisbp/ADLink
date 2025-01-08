import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/${process.env.DISCORD_ID}`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
