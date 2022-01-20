import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { format } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';
import { localeSelector } from '../../redux/locale/selectors';
import { User as IUser } from '../../interfaces';
import { navConfig } from '../../utils/constants';
import styles from './User.module.scss';

interface IProps {
    user: IUser;
}

type DateType = number | Date;

export const User = ({ user }: IProps) => {
    const language = useSelector(localeSelector);

    const parseDate = (date: DateType, lang: string, formatStr = 'PP') => {
        const locales: Record<string, Locale> = { enUS, ru };

        return format(date, formatStr, {
            locale: locales[lang],
        });
    };

    return (
        <li className={`${styles.person} ${styles[user.gender]}`}>
            <NavLink
                className={styles.person__link}
                to={`${navConfig.userInfo.path}/${user.login.uuid}`}
                state={user}
            >
                <img
                    className={styles.person__photo}
                    src={user.picture.large}
                    alt="User`s photo"
                    width="130"
                    height="130"
                />
                <p
                    className={styles.person__name}
                >{`${user.name.first} ${user.name.last}`}</p>
                <p className={styles.person__birthday}>
                    {parseDate(new Date(user.dob.date), language)}
                </p>
                <p className={styles.person__gender}>{user.gender}</p>
            </NavLink>
        </li>
    );
};
