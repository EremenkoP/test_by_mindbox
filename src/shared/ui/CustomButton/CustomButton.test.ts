import { describe, test, expect } from "vitest";
import { CustomButton } from "./CustomButton";

describe('customButton', () => {
  test('renderDefault', () => {
    const result = CustomButton({onClick: () => console.log('click')});
    expect(result).toMatchSnapshot()
  })
});
