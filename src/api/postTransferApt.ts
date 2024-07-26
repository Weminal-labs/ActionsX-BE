import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { Request, Response } from "express";

export async function postTransferAptos(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    try {
        const config = new AptosConfig({ network: Network.TESTNET });
        const aptos = new Aptos(config);
        const { amount, toAddress, fromAddress } = req.body;

        const transaction = await aptos.transferCoinTransaction({
            sender: fromAddress,
            recipient: toAddress,
            amount: amount.toString(),
        });

        // Chuyển đổi transaction thành đối tượng có thể serialize
        const serializableTransaction = JSON.parse(JSON.stringify(transaction, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value
        ));

        const payload = {
            transaction: serializableTransaction,
            message: `Send ${amount} APT to ${toAddress}`
        }
        
        console.log("Transaction:", transaction);
        console.log("Payload:", payload);
        res.json(payload);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message || "An unknown error occurred" });
    }
}