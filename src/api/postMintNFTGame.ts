import {
  AccountAddressInput,
  AnyNumber,
  Aptos,
  AptosConfig,
  Network,
} from "@aptos-labs/ts-sdk";
import { Request, Response } from "express";

export async function postMintNFTGame(req: Request, res: Response): Promise<void> {
  console.log("body", req.body);
  try {
    const { toAddress, nftName, nftDescription, nftUri } = req.body;
    const config = new AptosConfig({ network: Network.TESTNET });
    const aptos = new Aptos(config);
    const name: string = "AptoGochi";
    const body: number = 1;
    const ear: number = 1;
    const face: number = 1;
    const signer = req.body.signer;

    const NFT_MODULE =
      "0xb686acdc6c166f92aa2090f005acc275b258c5d91653df9b3b8af21e7c104773::main::create_aptogotchi";
    const transaction: any = {
      data: {
        function: NFT_MODULE,
        typeArguments: [],
        functionArguments: [
          name as String,
          body as AnyNumber,
          ear as AnyNumber,
          face as AnyNumber,
        ],
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
