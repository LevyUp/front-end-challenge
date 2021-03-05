import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Calculator from "../Calculator";

const talentPathRegex = /talent-path/i;
const talentRegex = /talent-input/i;

describe("Calculator", () => {
  it("renders the header and point tracker", () => {
    render(<Calculator paths={[]} totalPoints={0} />);

    expect(screen.getByRole("heading"));
    expect(screen.getByText(/0 \/ 0/i));
    expect(screen.getByText(/points spent/i));
    expect(screen.queryByTestId(talentPathRegex)).not.toBeInTheDocument();
  });

  it("renders the paths", () => {
    render(
      <Calculator
        paths={[
          { id: "1", name: "1", talents: [] },
          { id: "2", name: "2", talents: [] },
        ]}
        totalPoints={0}
      />
    );

    expect(screen.queryAllByTestId(talentPathRegex).length).toBe(2);
  });

  it("spends a talent point", async () => {
    render(
      <Calculator
        paths={[
          {
            id: "1",
            name: "1",
            talents: [{ id: "t-1", icon: "talent", name: "talent" }],
          },
        ]}
        totalPoints={1}
      />
    );

    fireEvent.change(screen.getByTestId(talentRegex), {
      target: { value: "1" },
    });

    waitFor(() => screen.getByText(/1 \/ 1/i));
  });

  it("doesn't spend a talent point", async () => {
    render(
      <Calculator
        paths={[
          {
            id: "1",
            name: "1",
            talents: [{ id: "t-1", icon: "talent", name: "talent" }],
          },
        ]}
        totalPoints={1}
      />
    );

    fireEvent.change(screen.getByTestId(talentRegex), {
      target: { value: "2" },
    });

    waitFor(() => screen.getByText(/0 \/ 1/i));
  });
});
