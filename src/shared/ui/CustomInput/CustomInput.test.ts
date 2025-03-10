import { describe, test, expect } from "vitest";
import { CustomInput } from "./CustomInput";

describe('CustomInput', () => {
  test('render', () => {
    const result = CustomInput({value: 'test'});
    expect(result).toMatchSnapshot()
  })
})