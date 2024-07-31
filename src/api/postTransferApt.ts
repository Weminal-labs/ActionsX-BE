import { AccountAddressInput, AnyNumber, Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { Request, Response } from "express";

export async function postTransferAptos(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    try {
        const config = new AptosConfig({ network: Network.TESTNET });
        console.log("------------")
        const aptos = new Aptos(config);
        console.log("------------")
        const { amount, toAddress, fromAddress } = req.body;
        console.log("------------")

        const transaction = await aptos.transferCoinTransaction({
            sender: fromAddress as AccountAddressInput,
            recipient: toAddress as AccountAddressInput,
            amount: amount as AnyNumber,
        });
        console.log("------------")

        // Chuyển đổi transaction thành đối tượng có thể serialize
        const serializableTransaction = JSON.parse(JSON.stringify(transaction, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value
        ));
        console.log("------------",serializableTransaction)

        serializableTransaction.feePayerAddress = fromAddress as AccountAddressInput;

        console.log("------------", serializableTransaction);

        const payload = {
            transaction: serializableTransaction,
            message: `Send ${amount} APT to ${toAddress}`
        }
        console.log("------------")
        
        console.log("Transaction:", transaction);
        console.log("Payload:", payload);
        res.json(payload);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message || "An unknown error occurred" });
    }
}