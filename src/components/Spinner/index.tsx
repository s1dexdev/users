import { Plane } from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={styles.spinnerBackdrop}>
            <Plane color="#49c94f" arialLabel="loading-indicator" />
        </div>
    );
};
