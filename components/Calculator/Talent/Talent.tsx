import React, { useState } from "react";
import styles from "./Talent.module.scss";
import { Talent as TalentModel } from "../../../types/calculator";

export type TalentProps = TalentModel & {
  isSelected: boolean;
  checked: boolean;
  pathName: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRightClick: (e: React.SyntheticEvent<HTMLElement>, value: number) => void;
};

const Talent = ({
  icon,
  id,
  isSelected,
  name,
  pathName,
  value,
  checked,
  onChange,
  onRightClick,
}: TalentProps) => {
  const [hover, setHover] = useState(false);
  const imgType = isSelected || hover ? "active" : "muted";
  const src = `/icons/${icon}-${imgType}.png`;

  return (
    <label
      className={styles.talent}
      onContextMenu={(e) => onRightClick(e, value)}
      onMouseOver={(_) => setHover(true)}
      onMouseOut={(_) => setHover(false)}
    >
      <span className={styles.name}>{name}</span>
      <input
        data-testid="talent-input"
        className={styles.field}
        type="radio"
        name={pathName}
        id={`talent-${id}`}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <img
        className={`${styles.icon} ${isSelected ? styles.isSelected : ""}`}
        src={src}
        alt={name}
      />
    </label>
  );
};

export default Talent;
