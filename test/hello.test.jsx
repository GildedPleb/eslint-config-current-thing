// PathMark: ./test/hello.test.jsx
import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import HiddenMessage from "./hello";

describe("do tests of tests for JSX", function a() {
  it("shows the children when the checkbox is checked", function s() {
    const testMessage = "Test Message";
    render(<HiddenMessage>{testMessage}</HiddenMessage>);

    expect(screen.queryByText(testMessage)).not.toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/show/i));

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
// EOF
