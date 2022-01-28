import { MouseEvent } from 'react';

interface Params {
    children: React.ReactNode;
    name: string;
    customClass: string;
    onHandleClick: (event: MouseEvent) => void;
}

export const Button = ({
    children,
    name,
    customClass,
    onHandleClick,
}: Params) => (
    <button
        type="button"
        name={name}
        className={customClass}
        onClick={onHandleClick}
    >
        {children}
    </button>
);
