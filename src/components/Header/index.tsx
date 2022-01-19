import { useSelector } from 'react-redux';
import { Container, AppBar, LangButtons } from '../../components';
import { isAuthenticatedSelector } from '../../redux/auth/selectors';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
    const isAuth = useSelector(isAuthenticatedSelector);

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <div>
                        <Logo />
                        {isAuth && <AppBar />}
                    </div>
                    <LangButtons />
                </div>
            </Container>
        </header>
    );
};
