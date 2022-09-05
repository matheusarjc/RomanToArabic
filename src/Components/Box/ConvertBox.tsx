import { ReactElement } from "react";

import styles from "./ConvertBox.module.css";

interface RomanNumb {
  value: string | number | boolean | ReactElement | string;
}

export function ConvertBox(props: RomanNumb) {
  return (
    <div className={styles.container}>
      <span>
        {props.value > 3999 ? <p>Limite até 3999! MMMCMXCIX</p> : props.value}
      </span>
    </div>
  );
}
