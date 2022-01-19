import { Container, LangButtons } from '../../components';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <div>
                        <Logo />
                    </div>
                    <LangButtons />
                </div>
            </Container>
        </header>
    );
};
