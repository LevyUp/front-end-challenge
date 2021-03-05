import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import TalentPath from "../TalentPath";

const talentRegex = /talent-input/i;

describe("TalentPath", () => {
  it("renders the name and hidden radio button", () => {
    render(
      <TalentPath
        id="id"
        name="name"
        points={0}
        talents={[]}
        onChange={() => {}}
        onRightClick={() => {}}
      />
    );

    expect(screen.getByTestId(/path-name/i));
    expect(screen.getByLabelText(/name-0/i));
    expect(screen.queryByTestId(talentRegex)).not.toBeInTheDocument();
  });

  it("renders the talents", () => {
    render(
      <TalentPath
        id="id"
        name="name"
        points={0}
        talents={[
          { id: "t-0", icon: "talent-0", name: "talent-0" },
          { id: "t-1", icon: "talent-1", name: "talent-1" },
        ]}
        onChange={() => {}}
        onRightClick={() => {}}
      />
    );
    const talents = screen.queryAllByTestId(talentRegex);
    expect(talents.length).toBe(2);
    const icons = screen.getAllByAltText(/talent-/);
    icons.forEach((icon, index) =>
      expect(icon).toHaveAttribute("src", `/icons/talent-${index}-muted.png`)
    );
  });

  it("allocates points to talents", () => {
    render(
      <TalentPath
        id="id"
        name="name"
        points={2}
        talents={[
          { id: "t-0", icon: "talent-0", name: "talent-0" },
          { id: "t-1", icon: "talent-1", name: "talent-1" },
        ]}
        onChange={() => {}}
        onRightClick={() => {}}
      />
    );
    const icons = screen.getAllByAltText(/talent-/);
    icons.forEach((icon, index) =>
      expect(icon).toHaveAttribute("src", `/icons/talent-${index}-active.png`)
    );
  });
});
