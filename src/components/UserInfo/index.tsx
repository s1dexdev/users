import { User } from '../../interfaces';
import styles from './UserInfo.module.scss';

interface Params {
    user: User;
    locale: string;
    parseDateCallback: (date: Date | number, locale: string) => string;
    translate: (value: string) => string;
}

export const UserInfo = ({
    user,
    locale,
    parseDateCallback,
    translate,
}: Params) => (
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
                <b>{translate('userInfoPage.user.name')}:</b>{' '}
                {`${user.name.first} ${user.name.last}`}
            </p>
            <p>
                <b>{translate('userInfoPage.user.dob')}: </b>
                {parseDateCallback(new Date(user.dob.date), locale)}
            </p>
            <p>
                <b>{translate('userInfoPage.user.gender')}: </b>
                {user.gender}
            </p>
            <p>
                <b>{translate('userInfoPage.user.address')}: </b>
                {user.location.city}
            </p>
            <p>
                <b>{translate('userInfoPage.user.phone')}: </b>
                {user.phone}
            </p>
            <p>
                <b>{translate('userInfoPage.user.regDate')}: </b>
                {parseDateCallback(new Date(user.registered.date), locale)}
            </p>
        </div>
    </div>
);
