import { ChangeEventHandler } from 'react';
import styles from './ConvertInput.module.css';

export function ConvertInputR(props: { onChange: ChangeEventHandler<HTMLInputElement> | undefined; }){
    const num = "6"
    const StoN = parseInt(num)

    
    
    return (
        <input
            id='num'
          className={styles.container}
          onChange={props.onChange}
          maxLength={StoN}
          placeholder="Digite um número..."
          type='text'
          max="3999"
        />  
      );
}