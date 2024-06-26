import { describe, expect, test } from "bun:test";
import { startServer } from './index';

describe("Receipt schema", () => {
    test("can parse schema", async () => {
        const app = await startServer()
        expect(app).toBeDefined();
        await app.stop();
    });
})