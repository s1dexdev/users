import { useSelector } from 'react-redux';
import { Container, AppBar } from '../../components';
import { isAuthenticatedSelector } from '../../redux/auth/selectors';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
    const isAuth = useSelector(isAuthenticatedSelector);

    return (
        <header className={styles.header}>
            <Container>
                <Logo />
                {isAuth && <AppBar />}
            </Container>
        </header>
    );
};
