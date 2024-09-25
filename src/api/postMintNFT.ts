import {
  AccountAddressInput,
  AnyNumber,
  Aptos,
  AptosConfig,
  Network,
} from "@aptos-labs/ts-sdk";
import { Request, Response } from "express";

export async function postMintNFT(req: Request, res: Response): Promise<void> {
  console.log("body", req.body);
  try {
    const { toAddress, nftName, nftDescription, nftUri } = req.body;
    const config = new AptosConfig({ network: Network.TESTNET });
    const aptos = new Aptos(config);
    const quanity: number = 1;
    const signer = req.body.signer;
    const NFT_MODULE =
      "0x5a44ff76148e3ebdfcedcbf0408ba49844561f7c7db4e5c71e3652d3b7183190::minting::mint_nft";
    const transaction: any = {
      data: {
        function: NFT_MODULE,
        typeArguments: [],
        functionArguments: [quanity as AnyNumber],
      },
    };
    const payload = {
      transaction: transaction,
      message: `Mint Sussces`,
    };

    console.log("Payload:", payload);
    res.json(payload);
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
}
