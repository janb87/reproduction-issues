import { t } from "elysia";
import type { TransactionReceipt } from "viem";

export const receiptSchema = t.Object({
    blobGasPrice: t.Optional(t.String({ description: "Blob Gas Price" })),
    blobGasUsed: t.Optional(t.String({ description: "Blob Gas Used" })),
    blockHash: t.String({ description: "Block Hash" }),
    blockNumber: t.String({ description: "Block Number" }),
    contractAddress: t.Optional(t.Union([t.String(), t.Null()], { description: "Contract Address" })),
    cumulativeGasUsed: t.String({ description: "Cumulative Gas Used" }),
    effectiveGasPrice: t.String({ description: "Effective Gas Price" }),
    from: t.String(),
    gasUsed: t.String({ description: "Gas Used" }),
    logs: t.Array(t.Any(), { description: "Logs" }),
    logsBloom: t.String({ description: "Logs Bloom" }),
    root: t.Optional(t.String()),
    status: t.Union([t.Literal("success"), t.Literal("reverted")], { description: "Status" }),
    to: t.Union([t.String(), t.Null()], { description: "To" }),
    transactionHash: t.String(),
    transactionIndex: t.Integer({ description: "Transaction Index" }),
    type: t.String({ description: "Type" }),
});
