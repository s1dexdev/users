import { Container } from '../../components';
import { LangButtonsContainer } from '../../containers';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <Container>
            <div className={styles.header__wrapper}>
                <div>
                    <Logo />
                </div>
                <LangButtonsContainer />
            </div>
        </Container>
    </header>
);
