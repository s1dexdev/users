import { Button, Spinner } from '../../components';
import styles from './LoginForm.module.scss';

interface Params {
    loading: boolean;
    translate: (value: string) => string;
    onLogin: () => void;
}

export const LoginForm = ({ loading, translate, onLogin }: Params) => (
    <div className={styles.loginWrap}>
        <p className={styles.loginWrap__title}>
            {translate('loginPage.title')}
        </p>
        <Button
            customClass={styles.loginWrap__login}
            type="button"
            name="login"
            onHandleClick={onLogin}
        >
            {translate('loginPage.login')}
        </Button>
        {loading && <Spinner />}
    </div>
);
