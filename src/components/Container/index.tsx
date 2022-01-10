import styles from './Container.module.scss';

interface IProps {
    children: React.ReactNode;
}

export function Container({ children }: IProps) {
    return <div className={styles.container}>{children}</div>;
}
