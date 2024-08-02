import { Request, Response } from "express";

export async function getTransferApt(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const payload = {
      title: "Actions Example - Transfer Native Aptos",
      icon: "https://aptosfoundation.org/brandbook/logotype/PNG/Aptos_Primary_BLK.png",
      description: "Transfer APT to another APT wallet",
      links: {
        actions: [
          { label: "Send 1 APT", amount: 1 },
          { label: "Send 5 APT", amount: 5 },
          { label: "Send 10 APT", amount: 10 },
          {
            label: "Send APT",
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
