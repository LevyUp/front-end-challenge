import TalentPath from "./TalentPath";
import React, { useState } from "react";
import styles from "./Calculator.module.scss";
import { Calculator as CalculatorModel, Loadout } from "../../types/calculator";

export type CalculatorProps = CalculatorModel & Loadout;

const Calculator = ({ distribution, paths, totalPoints }: CalculatorProps) => {
  const initialDistribution = distribution
    ? paths.map((path) => distribution[path.id])
    : Array(paths.length).fill(0);

  const [pointDistribution, setPointDistribution] = useState(
    initialDistribution
  );
  const spent = pointDistribution.reduce((a, b) => a + b, 0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, path: number) => {
    const value = parseInt(e.target.value);
    const cost = value - pointDistribution[path];
    const remaining = totalPoints - spent;

    if (cost > remaining) {
      e.preventDefault();
    } else {
      const reallocatedPoints = [...pointDistribution];
      reallocatedPoints[path] = value;
      setPointDistribution(reallocatedPoints);
    }
  };

  const onRightClick = (
    e: React.SyntheticEvent<HTMLElement>,
    value: number,
    path: number
  ) => {
    e.preventDefault();
    const repayment = pointDistribution[path] - value + 1;
    if (repayment > 0) {
      const reallocatedPoints = [...pointDistribution];
      reallocatedPoints[path] = value - 1;
      setPointDistribution(reallocatedPoints);
    }
  };

  return (
    <div className={styles.calculator}>
      <h1 className={styles.title}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h1>
      <div className={styles.container}>
        <div className={styles.pathColumn}>
          {paths.map((path, index) => {
            return (
              <div key={path.name} className={styles.path}>
                <TalentPath
                  id={path.id}
                  name={path.name}
                  points={pointDistribution[index]}
                  talents={path.talents}
                  onChange={(e) => onChange(e, index)}
                  onRightClick={(e, v) => onRightClick(e, v, index)}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.tracker}>
          <span>
            {spent} / {totalPoints}
          </span>
          <span className={styles.trackerText}>Points Spent</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
