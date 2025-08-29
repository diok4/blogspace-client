import type { FC } from "react";
//import styles from './Input.module.css'
import type { IInput } from "./types";

export const Input: FC<IInput> = ({
  type,
  value,
  onChange,
  name,
  placeholder,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        required
      />
    </>
  );
};
