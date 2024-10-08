import {
  AccountAddressInput,
  AnyNumber,
  Aptos,
  AptosConfig,
  Network,
} from "@aptos-labs/ts-sdk";
import { Request, Response } from "express";

export async function postFlipGame(req: Request, res: Response): Promise<void> {
  console.log("body", req.body);
  try {
    const config = new AptosConfig({ network: Network.TESTNET });
    const aptos = new Aptos(config);
    // const aptosCoin = "0x1::aptos_coin::AptosCoin";
    const amount: number = 1;
    const vaultAddress = "0x84c8db2830c254118aa698ddd0c536b0a9cfec99f65eb51e49c9f273488b3b7f";
    const signer = req.body.signer;

    const Game_MODULE =
      "0x84c8db2830c254118aa698ddd0c536b0a9cfec99f65eb51e49c9f273488b3b7f::coinflip::play";
    const transaction: any = {
      data: {
        function: Game_MODULE,
        typeArguments: [],
        functionArguments: [
          amount as AnyNumber,
          vaultAddress as string,
        ],
      },
    };
    const payload = {
      transaction: transaction,
      message: `Play Coinflip Sussces`,
    };

    console.log("Payload:", payload);
    res.json(payload);
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
}
