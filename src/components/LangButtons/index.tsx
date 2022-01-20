import { useDispatch } from 'react-redux';
import { setLocale } from '../../redux/locale/action';
import { LOCALES } from '../../lang';
import { ReactComponent as GbFlag } from '../../assets/images/gb.svg';
import { ReactComponent as RuFlag } from '../../assets/images/ru.svg';
import styles from './LangButtons.module.scss';

export const LangButtons = () => {
    const dispatch = useDispatch();
    const changeLanguage = (locale: string) => dispatch(setLocale(locale));

    return (
        <div className={styles.langButtons}>
            <button
                className={styles.langButtons__btn}
                type="button"
                onClick={() => changeLanguage(LOCALES.RUSSIAN)}
            >
                <RuFlag className={styles.langButtons__flag} width={26} />
            </button>
            <button
                className={styles.langButtons__btn}
                type="button"
                onClick={() => changeLanguage(LOCALES.ENGLISH)}
            >
                <GbFlag className={styles.langButtons__flag} width={26} />
            </button>
        </div>
    );
};
