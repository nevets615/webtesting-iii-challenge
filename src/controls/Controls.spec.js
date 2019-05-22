// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "../dashboard/Dashboard";
import Controls from "./Controls";

describe("Controls", () => {
  it("text changes on click to close gate", async () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText("Close Gate");
    await fireEvent.click(closeButton);
    getByText("Open Gate");
  });
});
