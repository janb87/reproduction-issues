import type { TransactionReceipt } from "viem";
import { receiptSchema } from "./receipt.schema";

const receipt: Partial<TransactionReceipt> = {
    logs: []
}

console.log(receipt)
console.log(receiptSchema)