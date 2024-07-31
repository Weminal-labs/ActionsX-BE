import { AccountAddressInput, AnyNumber, Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { Request, Response } from "express";

export async function postTransferAptos(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    try {
        const config = new AptosConfig({ network: Network.TESTNET });
        const aptos = new Aptos(config);
        const { amount, toAddress, fromAddress } = req.body;

        const APTOS_COIN = "0x1::aptos_coin::AptosCoin";

        const transaction: any = {
            data: {
              function: "0x1::coin::transfer",
              typeArguments: [APTOS_COIN],
              functionArguments: [
                toAddress as AccountAddressInput,
                Number(amount)*10**8 as AnyNumber,
              ], // is in Octas
            },
        };

        const payload = {
            transaction: transaction,
            message: `Send ${amount} APT to ${toAddress}`
        }
        
        console.log("Payload:", payload);
        res.json(payload);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message || "An unknown error occurred" });
    }
}