import React, { useState } from "react";
import styles from "./Talent.module.scss";

export type TalentProps = {
  isPurchased: boolean;
  checked: boolean;
  name: string;
  pathName: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRightClick: (e: React.SyntheticEvent<HTMLElement>, value: number) => void;
};

const Talent = ({
  isPurchased,
  name,
  pathName,
  value,
  checked,
  onChange,
  onRightClick,
}: TalentProps) => {
  const [hover, setHover] = useState(false);
  const imgType = isPurchased || hover ? "active" : "muted";
  const src = `/icons/${name}-${imgType}.png`;

  return (
    <label
      className={styles.talent}
      onContextMenu={(e) => onRightClick(e, value)}
      onMouseOver={(_) => setHover(true)}
      onMouseOut={(_) => setHover(false)}
    >
      <span>{name}</span>
      <input
        type="radio"
        id={`${pathName}-${name}`}
        name={pathName}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <img src={src} alt={name} />
    </label>
  );
};

export default Talent;
