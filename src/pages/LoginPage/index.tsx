import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../components';
import { loginRequest } from '../../redux/auth/actions';
import { loadingSelector } from '../../redux/auth/selectors';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);

    const login = () => dispatch(loginRequest());

    return (
        <>
            <div className={styles.loginWrap}>
                <p className={styles.loginWrap__title}>
                    {t('loginPage.title')}
                </p>
                <button className="btn" type="button" onClick={login}>
                    {t('loginPage.login')}
                </button>
            </div>
            {isLoading && <Spinner />}
        </>
    );
};
