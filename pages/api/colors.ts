import { ColorDefs, GenerateColors } from "$lib/colors";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(GenerateColors(ColorDefs));
}
