import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { localeSelector } from '../../redux/locale/selectors';
import { User } from '../../interfaces';
import styles from './UserInfo.module.scss';

type DateType = number | Date;

export const UserInfo = ({ user }: { user: User }) => {
    const { t } = useTranslation();
    const language = useSelector(localeSelector);

    const parseDate = (date: DateType, lang: string, formatStr = 'PP') => {
        const locales: Record<string, Locale> = { enUS, ru };

        return format(date, formatStr, {
            locale: locales[lang],
        });
    };

    return (
        <div className={`${styles.userBox}`}>
            <img
                className={styles.userBox__photo}
                src={user.picture.large}
                width="180"
                height="180"
                alt="User`s photo"
            />

            <div className={styles.userBox__info}>
                <p>
                    <b>{t('userInfoPage.user.name')}:</b>{' '}
                    {`${user.name.first} ${user.name.last}`}
                </p>
                <p>
                    <b>{t('userInfoPage.user.dob')}: </b>
                    {parseDate(new Date(user.dob.date), language)}
                </p>
                <p>
                    <b>{t('userInfoPage.user.gender')}: </b>
                    {user.gender}
                </p>
                <p>
                    <b>{t('userInfoPage.user.address')}: </b>
                    {user.location.city}
                </p>
                <p>
                    <b>{t('userInfoPage.user.phone')}: </b>
                    {user.phone}
                </p>
                <p>
                    <b>{t('userInfoPage.user.regDate')}: </b>
                    {parseDate(new Date(user.registered.date), language)}
                </p>
            </div>
        </div>
    );
};
