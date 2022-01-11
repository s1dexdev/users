import { MouseEvent } from 'react';

interface IProps {
    text: string;
    onHandleClick: (event: MouseEvent) => void;
}

export function Button({ text, onHandleClick }: IProps): JSX.Element {
    return (
        <button type="button" onClick={onHandleClick}>
            {text}
        </button>
    );
}
