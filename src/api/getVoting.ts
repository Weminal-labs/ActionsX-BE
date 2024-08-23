import { title } from "process";
import { BASE_URL } from "../utilis/config";
import { Request, Response } from "express";

export async function getVoting(req: Request, res: Response): Promise<void> {
  try {
    const baseHref = `${BASE_URL}/api/actions/voting`;
    const payload = {
      title: "Actions Voting Example",
      icon: "https://assets-global.website-files.com/606f63778ec431ec1b930f1f/63dbd502218a274f2a602968_aptos.png",
      description: "Voting for Trump or Biden",
      links: {
        actions: [
          { label: "Trump", href: `${baseHref}/voteA` },
          { label: "Biden", href: `${baseHref}/voteB` },
        ],
      },
    };
    res.json(payload);
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
}
