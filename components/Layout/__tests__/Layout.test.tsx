import { render, screen } from "@testing-library/react";
import React from "react";
import Layout from "../Layout";

describe("Layout", () => {
  it("renders the layout", async () => {
    render(<Layout title="title">children</Layout>);

    expect(screen.getByRole("main"));
    expect(screen.getByText("children"));
  });
});
