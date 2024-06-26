import { describe, expect, test } from "bun:test";
import { receiptSchema } from "./receipt.schema";

describe("Receipt schema", () => {
    test("can parse schema", async () => {
        expect(receiptSchema).toBeDefined();
    });
})