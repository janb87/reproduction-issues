import type { TransactionReceipt } from "viem";
import { receiptSchema } from "./receipt.schema";

const receipt: Partial<TransactionReceipt> = {
    logs: []
}

export function printReceiptInfo() {
    console.log(receipt)
    console.log(receiptSchema)
    return true
}

