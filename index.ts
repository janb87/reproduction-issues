import type { TransactionReceipt } from "viem";
import { receiptSchema } from "./receipt.schema";
import Elysia, { t } from "elysia";

const app = new Elysia()

const receipt: Partial<TransactionReceipt> = {
    logs: []
}

export async function startServer() {
    return app.ws("/ws", {
        response: t.Union([receiptSchema, t.Object({ error: t.String() })]),
        message: async (ws) => {
            console.log(receipt)
            ws.send({
                error: 'no receipt',
            });
        },
    }).listen(3000);
}
