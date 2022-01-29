import { ButtonHTMLAttributes, MouseEvent } from 'react';

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    customClass: string;
    onHandleClick: (event: MouseEvent) => void;
}

export const Button = ({
    children,
    customClass,
    onHandleClick,
    ...attrs
}: Params) => (
    <button className={customClass} onClick={onHandleClick} {...attrs}>
        {children}
    </button>
);
