import {
  AccountAddressInput,
  AnyNumber,
  Aptos,
  AptosConfig,
  Network,
} from "@aptos-labs/ts-sdk";
import { Request, Response } from "express";

export async function postVoteTransaction(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const select = req.query.select;
    const { senderAddress } = req.body;
    const config = new AptosConfig({ network: Network.TESTNET });
    const aptos = new Aptos(config);

    const vote = parseInt(select as string, 10);
    const VOTING_MODULE =
      "0xcf93a427615b6bedd9d32d6ff0e928e901af75b8a609dc24a9b9fb048be74732::voting::vote";

    const transaction: any = {
      data: {
        function: VOTING_MODULE,
        typeArguments: [],
        functionArguments: [Number(select) as AnyNumber],
      },
    };

    const payload = {
      transaction: transaction,
      message: `Voted Success`,
    };

    console.log("Payload:", payload);
    res.json(payload);
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
}
