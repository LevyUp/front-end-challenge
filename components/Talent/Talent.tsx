import React, { useState } from "react";
import styles from "./Talent.module.scss";

export type TalentProps = {
  isSelected: boolean;
  checked: boolean;
  name: string;
  pathName: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRightClick: (e: React.SyntheticEvent<HTMLElement>, value: number) => void;
};

const Talent = ({
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
  const src = `/icons/${name}-${imgType}.png`;

  return (
    <label
      className={styles.talent}
      onContextMenu={(e) => onRightClick(e, value)}
      onMouseOver={(_) => setHover(true)}
      onMouseOut={(_) => setHover(false)}
    >
      <span className={styles.talent_name}>{name}</span>
      <input
        className={styles.talent_input}
        type="radio"
        id={`${pathName}-${name}`}
        name={pathName}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <img
        className={`${styles.talent_icon} ${
          isSelected ? styles.talent___isSelected : ""
        }`}
        src={src}
        alt={name}
      />
    </label>
  );
};

export default Talent;
