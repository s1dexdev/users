import { useTranslation } from 'react-i18next';
import { LOCALES } from '../../lang';
import { ReactComponent as GbFlag } from '../../assets/images/gb.svg';
import { ReactComponent as RuFlag } from '../../assets/images/ru.svg';
import styles from './LangButtons.module.scss';

export const LangButtons = () => {
    const { i18n } = useTranslation();

    return (
        <div className={styles.langButtons}>
            <button
                className={styles.langButtons__btn}
                type="button"
                onClick={() => i18n.changeLanguage(LOCALES.RUSSIAN)}
            >
                <RuFlag className={styles.langButtons__flag} width={26} />
            </button>
            <button
                className={styles.langButtons__btn}
                type="button"
                onClick={() => i18n.changeLanguage(LOCALES.ENGLISH)}
            >
                <GbFlag className={styles.langButtons__flag} width={26} />
            </button>
        </div>
    );
};
