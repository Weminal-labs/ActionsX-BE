import { title } from "process";
import { BASE_URL } from "../utilis/config";
import { Request, Response } from "express";

export async function getMintNftGame(req: Request, res: Response): Promise<void> {
  try {
    const baseHref = `${BASE_URL}/api/actions`;
    const payload = {
      icon: "https://assets-global.website-files.com/606f63778ec431ec1b930f1f/63dbd502218a274f2a602968_aptos.png",
      description: "Mint your AptoGochi nft",
      title: "AptoGochi Mint NFT",
      links: {
        actions: [{ label: "Mint", href: `${baseHref}/mint-nft-game` }],
      },
    };
    res.json(payload);
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occur" });
  }
}
