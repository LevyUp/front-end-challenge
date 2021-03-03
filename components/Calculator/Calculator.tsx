import TalentPath from "../TalentPath";
import React, { useState } from "react";
import styles from "./Calculator.module.scss";

export type CalculatorProps = Loadout;

const Calculator = ({ paths, totalPoints }: CalculatorProps) => {
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
    <div className={styles.calculator}>
      <h2 className={styles.calculator_title}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h2>
      <div className={styles.calculator_container}>
        <div className={styles.calculator_pathColumn}>
          {paths.map((path, index) => {
            return (
              <div key={path.name} className={styles.calculator_path}>
                <TalentPath
                  name={path.name}
                  points={pointAllocation[index]}
                  talents={path.talents}
                  onChange={(e) => onChange(e, index)}
                  onRightClick={(e, v) => onRightClick(e, v, index)}
                />
              </div>
            );
          })}
        </div>
        <div
          className={`${styles.calculator_tracker} ${styles.calculator_trackerDesktop}`}
        >
          <span>
            {spent}/{totalPoints}
          </span>
          <span>Points Spent</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
