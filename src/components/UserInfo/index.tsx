import { useTranslation } from 'react-i18next';
import { parseDate } from '../../utils/helpers';
import { User } from '../../interfaces';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ user }: { user: User }) => {
    const { t } = useTranslation();
    const { picture, name, dob, gender, location, phone, registered } = user;

    return (
        <div className={`${styles.userBox}`}>
            <img
                className={styles.userBox__photo}
                src={picture.large}
                width="180"
                height="180"
                alt="User`s photo"
            />

            <div className={styles.userBox__info}>
                <p>
                    <b>{t('userInfoPage.user.name')}:</b>{' '}
                    {`${name.first} ${name.last}`}
                </p>
                <p>
                    <b>{t('userInfoPage.user.dob')}: </b>
                    {parseDate(new Date(dob.date))}
                </p>
                <p>
                    <b>{t('userInfoPage.user.gender')}: </b>
                    {gender}
                </p>
                <p>
                    <b>{t('userInfoPage.user.address')}: </b>
                    {location.city}
                </p>
                <p>
                    <b>{t('userInfoPage.user.phone')}: </b>
                    {phone}
                </p>
                <p>
                    <b>{t('userInfoPage.user.regDate')}: </b>
                    {parseDate(new Date(registered.date))}
                </p>
            </div>
        </div>
    );
};
