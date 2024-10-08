import { title } from "process";
import { BASE_URL } from "../utilis/config";
import { Request, Response } from "express";

export async function getFlipGame(req: Request, res: Response): Promise<void> {
  try {
    const baseHref = `${BASE_URL}/api/actions`;
    const payload = {
      icon: "https://www.fliptos.xyz/static/media/1x.4ef4a0abec902e8a40a7.webp",
      description: "Play Coinflip Game",
      title: "Coinflip Game",
      links: {
        actions: [{ label: "Play", href: `${baseHref}/play-game` }],
      },
    };
    res.json(payload);
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occur" });
  }
}
