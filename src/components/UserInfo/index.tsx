import { User } from '../../interfaces';
import styles from './UserInfo.module.scss';

interface Params {
    user: User;
    userBirthday: string;
    userRegDate: string;
    translate: (value: string) => string;
}

export const UserInfo = ({
    user,
    userBirthday,
    userRegDate,
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
                {userBirthday}
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
                {userRegDate}
            </p>
        </div>
    </div>
);
