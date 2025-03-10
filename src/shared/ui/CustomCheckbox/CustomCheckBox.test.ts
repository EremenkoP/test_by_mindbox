import { describe, test, expect } from "vitest";
import { CustomCheckbox } from "./CustomCheckbox";

describe("customCheckBox", () => {
  test("render is checkend", () => {
    const result = CustomCheckbox({ isCheckend: true, setIsChekend: () => {} });
    expect(result).toMatchSnapshot();
  });

  test("render is not checkend", () => {
    const result = CustomCheckbox({
      isCheckend: false,
      setIsChekend: () => {},
    });
    expect(result).toMatchSnapshot();
  });
});
