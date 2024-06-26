import { describe, expect, test } from "bun:test";
import { printReceiptInfo } from './index';

describe("Receipt schema", () => {
    test("can parse schema", async () => {
        expect(printReceiptInfo()).toBeDefined();
    });
})