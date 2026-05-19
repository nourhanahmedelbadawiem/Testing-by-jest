import { add } from "./math";
import {  it, expect } from "vitest";

it("should add two numbers", () => {
    //==> AAA Pattern for testing
    // Arrange  
    const numbers = [1, 2, 3, 4, 5];
    // Act
    const result = add(numbers);
    // Assert
    expect(result).toBe(3);
});