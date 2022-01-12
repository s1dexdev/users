import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner, Container } from '../../components';
import { loginRequest } from '../../redux/auth/actions';
import { loading } from '../../redux/auth/selectors';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);

    const login = () => dispatch(loginRequest());

    return (
        <Container>
            <div className={styles.loginWrap}>
                <p className={styles.loginWrap__title}>Click Log in</p>
                <Button text="Log in" onHandleClick={login} />
            </div>
            {isLoading && <Spinner />}
        </Container>
    );
};
