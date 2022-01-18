import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner } from '../../components';
import { loginRequest } from '../../redux/auth/actions';
import { loadingSelector } from '../../redux/auth/selectors';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);

    const login = () => dispatch(loginRequest());

    return (
        <>
            <div className={styles.loginWrap}>
                <p className={styles.loginWrap__title}>Click Log in</p>
                <Button text="Log in" onHandleClick={login} />
            </div>
            {isLoading && <Spinner />}
        </>
    );
};
