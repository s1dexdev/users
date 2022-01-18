import { MouseEvent } from 'react';
import styles from './Button.module.scss';

interface IProps {
    text: string;
    onHandleClick: (event: MouseEvent) => void;
}

export const Button = ({ text, onHandleClick }: IProps) => {
    return (
        <button className={styles.btn} type="button" onClick={onHandleClick}>
            {text}
        </button>
    );
};
