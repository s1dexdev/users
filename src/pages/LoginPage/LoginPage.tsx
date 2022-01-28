import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Button } from '../../components';
import { loginRequest } from '../../redux/auth/actions';
import { loadingSelector } from '../../redux/auth/selectors';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);

    const login = () => dispatch(loginRequest());

    return (
        <div className={styles.loginWrap}>
            <p className={styles.loginWrap__title}>{t('loginPage.title')}</p>
            <Button
                customClass={styles.loginWrap__login}
                name="login"
                onHandleClick={login}
            >
                {t('loginPage.login')}
            </Button>
            {isLoading && <Spinner />}
        </div>
    );
};

export default LoginPage;
