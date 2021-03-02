import Talent from "../Talent";
import React from "react";

export type TalentPathProps = {
  name: string;
  points: number;
  talents: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRightClick: (e: React.SyntheticEvent<HTMLElement>, value: number) => void;
};

const TalentPath = ({
  name,
  points,
  talents,
  onChange,
  onRightClick,
}: TalentPathProps) => {
  return (
    <div>
      <span>{name}-0</span>
      <label>
        <span>{name}</span>
        <input
          type="radio"
          id={`${name}-0`}
          name={name}
          value={0}
          onChange={onChange}
        />
      </label>
      {talents.map((talent, index) => {
        return (
          <Talent
            key={`${name}-${talent}`}
            name={talent}
            pathName={name}
            isPurchased={index < points}
            value={index + 1}
            checked={index === points - 1}
            onChange={onChange}
            onRightClick={onRightClick}
          />
        );
      })}
    </div>
  );
};

export default TalentPath;
