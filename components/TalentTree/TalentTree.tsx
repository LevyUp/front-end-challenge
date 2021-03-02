import TalentPath from "../TalentPath";
import React, { useState } from "react";
import PointTracker from "../PointTracker";

export type TalentTreeProps = {
  paths: { name: string; talents: string[] }[];
  totalPoints: number;
};

const TalentTree = ({ paths, totalPoints }: TalentTreeProps) => {
  const [pointAllocation, setPointAllocation] = useState(
    new Array(paths.length).fill(0)
  );
  const spent = pointAllocation.reduce((a, b) => a + b, 0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, path: number) => {
    const value = parseInt(e.target.value);
    const cost = value - pointAllocation[path];
    const remaining = totalPoints - spent;

    if (cost > remaining) {
      e.preventDefault();
    } else {
      const reallocatedPoints = [...pointAllocation];
      reallocatedPoints[path] = value;
      setPointAllocation(reallocatedPoints);
    }
  };

  const onRightClick = (
    e: React.SyntheticEvent<HTMLElement>,
    value: number,
    path: number
  ) => {
    e.preventDefault();
    const repayment = pointAllocation[path] - value + 1;
    if (repayment > 0) {
      const reallocatedPoints = [...pointAllocation];
      reallocatedPoints[path] = value - 1;
      setPointAllocation(reallocatedPoints);
    }
  };

  return (
    <div>
      <div>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</div>
      {paths.map((path, index) => {
        return (
          <TalentPath
            key={path.name}
            name={path.name}
            points={pointAllocation[index]}
            talents={path.talents}
            onChange={(e) => onChange(e, index)}
            onRightClick={(e, v) => onRightClick(e, v, index)}
          />
        );
      })}
      <PointTracker spent={spent} total={totalPoints} />
    </div>
  );
};

export default TalentTree;
