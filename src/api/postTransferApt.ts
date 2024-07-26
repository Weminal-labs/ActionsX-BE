import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { Request, Response } from "express";

export async function postTransferAptos(req: Request, res: Response): Promise<void> {
    console.log(req.body)
    try {
        const config = new AptosConfig({ network: Network.TESTNET });
        const aptos = new Aptos(config);
        const { amount } = req.body.amount;
        const { toAddress } = req.body;
        const transaction = await aptos.transferCoinTransaction({
            sender: req.body.fromAddress,
            recipient: req.body.toAddress,
            amount: req.body.amount,
        });
        const payload = {
            transaction,
            message: `Send ${amount} APT to ${toAddress.toBase58()}`
        }
        res.json(payload);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message || "An unknown error occurred" });
  }
}