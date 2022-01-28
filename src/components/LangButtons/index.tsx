import { MouseEvent } from 'react';
import { Button } from '../../components';
import { LOCALES } from '../../lang';
import { ReactComponent as GbFlag } from '../../assets/images/gb.svg';
import { ReactComponent as RuFlag } from '../../assets/images/ru.svg';
import styles from './LangButtons.module.scss';

interface Params {
    onChangeLanguage: (event: MouseEvent) => void;
}

export const LangButtons = ({ onChangeLanguage }: Params) => (
    <div className={styles.langButtons}>
        <Button
            customClass={styles.langButtons__btn}
            name={LOCALES.RUSSIAN}
            onHandleClick={onChangeLanguage}
        >
            <RuFlag className={styles.langButtons__flag} width={26} />
        </Button>
        <Button
            customClass={styles.langButtons__btn}
            name={LOCALES.ENGLISH}
            onHandleClick={onChangeLanguage}
        >
            <GbFlag className={styles.langButtons__flag} width={26} />
        </Button>
    </div>
);
