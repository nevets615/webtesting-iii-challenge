// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import renderer from "react-test-renderer";
import Display from "./Display";

describe("display", () => {
  it("renders component successfully", () => {
    render(<Display />);
  });
  it("check if led is green on open", () => {
    console.log(Display.defaultProps["closed"]);
    const { getByText, container } = render(<Display />);
    if (Display.defaultProps["closed"] === false) {
      const expected = getByText("Open");
      console.log(expected);

      expect(container.firstChild).toHaveClass(/green-led/i);
    }
  });
  it("check if led is red on close", () => {
    const { getByText, container } = render(<Display />);
    if (Display.defaultProps["locked"] === false) {
      const expected = getByText("Unlocked");
      expect(container.firstChild).toHaveClass("green-led");
    }
  });
  it("matches component snapshot", () => {
    const snap = renderer.create(<Display />);
    expect(snap.toJSON()).toMatchSnapshot();
  });
});
