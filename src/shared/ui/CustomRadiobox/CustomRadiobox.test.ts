import { describe, test, expect } from "vitest";
import { CustomRadiobox } from "./CustomRadiobox";

describe('CustomInput', () => {
  test('render is not checked', () => {
    const testFunction = (name: string) => {
      console.log(name)
    }
    const result = CustomRadiobox({
      name: "testName",
      value: "testValue",
      onChange: testFunction,
    });
    expect(result).toMatchSnapshot()
  })

    test("render is checked", () => {
      const testFunction = (name: string) => {
        console.log(name);
      };
      const result = CustomRadiobox({
        name: "testName",
        value: "testValue",
        onChange: testFunction,
        isChecked: true
      });
      expect(result).toMatchSnapshot();
    });
})