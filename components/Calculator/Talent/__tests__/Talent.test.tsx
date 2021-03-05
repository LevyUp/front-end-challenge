import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Talent from "../Talent";

const talentRegex = /talent-input/i;

describe("Talent", () => {
  it("renders the field", () => {
    render(
      <Talent
        name="name"
        id="id"
        icon="name"
        isSelected={false}
        pathName="path"
        checked={false}
        value={1}
        onChange={() => {}}
        onRightClick={() => {}}
      />
    );
    expect(screen.getByLabelText(/name/i));
    expect(screen.getByAltText(/name/i)).toHaveAttribute(
      "src",
      `/icons/name-muted.png`
    );
  });

  it("renders the field with active icon ", () => {
    render(
      <Talent
        name="name"
        id="id"
        icon="name"
        isSelected={true}
        pathName="path"
        checked={false}
        value={1}
        onChange={() => {}}
        onRightClick={() => {}}
      />
    );
    expect(screen.getByAltText(/name/i)).toHaveAttribute(
      "src",
      `/icons/name-active.png`
    );
  });
});
