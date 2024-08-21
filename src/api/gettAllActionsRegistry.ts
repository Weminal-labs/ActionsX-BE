import { Request, Response } from "express";

export async function gettAllActionsRegistry(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const payload = {
      actions: [
        {
          host: "actionx.com",
          state: "trusted",
        },
        {
          host: "actionx.com",
          state: "trusted",
        },
      ],
      websites: [
        {
          host: "actionx.com",
          state: "trusted",
        },
      ],
      interstitials: [
        {
          host: "actionx.com",
          state: "trusted",
        },
      ],
    };
    res.json(payload);
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
}
