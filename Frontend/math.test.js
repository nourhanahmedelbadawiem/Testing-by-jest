import { add } from "./math";
import {  it, expect } from "vitest";

it("should add two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});