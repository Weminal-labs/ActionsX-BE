import { BASE_URL } from "../utilis/config";
import { Request, Response } from "express";

export async function getTransferApt(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const baseHref = `${BASE_URL}/api/actions/transfer-apt`;

    const payload = {
      title: "Actions Example - Transfer Native Aptos",
      icon: "https://assets-global.website-files.com/606f63778ec431ec1b930f1f/63dbd502218a274f2a602968_aptos.png",
      description: "Transfer APT to another APT wallet",
      links: {
        actions: [
          { label: "Send 1 APT", href: `${baseHref}?amount=1` },
          { label: "Send 5 APT", href: `${baseHref}?amount=5` },
          { label: "Send 10 APT", href: `${baseHref}?amount=10` },
          {
            label: "Send APT",
            href: `${baseHref}?amount={amount}`,
            parameters: [
              {
                name: "amount",
                label: "Enter the amount of APT to send",
                required: true,
              },
            ],
          },
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
