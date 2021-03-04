import Talent from "../Talent";
import React from "react";
import styles from "./TalentPath.module.scss";
import { Path } from "../../types/calculator";

export type TalentPathProps = Path & {
  points: number;
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
    <div className={styles.path}>
      <span className={styles.path_name}>{name}</span>
      <label className={styles.path_emptyTalent}>
        <span>{name}-0</span>
        <input
          type="radio"
          id={`${name}-0`}
          name={name}
          value={0}
          onChange={onChange}
        />
      </label>
      <div className={styles.path_row}>
        {talents.map((talent, index) => {
          const isPurchased = index < points;
          return (
            <React.Fragment key={`${name}-${talent}`}>
              {index > 0 && <span className={styles.path_divider}></span>}
              <Talent
                name={talent}
                pathName={name}
                isSelected={isPurchased}
                value={index + 1}
                checked={index === points - 1}
                onChange={onChange}
                onRightClick={onRightClick}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TalentPath;
