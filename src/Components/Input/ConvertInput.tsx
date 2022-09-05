import { ChangeEventHandler } from 'react';
import styles from './ConvertInput.module.css';

export function ConvertInput(props: { onChange: ChangeEventHandler<HTMLInputElement> | undefined; }){
    const num = "4"
    const StoN = parseInt(num)

    
    
    return (
        <input
            id='num'
          className={styles.container}
          onChange={props.onChange}
          maxLength={StoN}
          placeholder="Digite um número..."
          type='number'
          max="3999"
        />  
      );
}