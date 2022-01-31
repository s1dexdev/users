import { User as IUser } from '../../interfaces';
import styles from './User.module.scss';

interface Params {
    user: IUser;
    userBirthday: string;
}

export const User = ({ user, userBirthday }: Params) => (
    <div className={`${styles.user} ${styles[user.gender]}`}>
        <img
            className={styles.user__photo}
            src={user.picture.large}
            alt="User`s photo"
            width="130"
            height="130"
        />
        <p
            className={styles.user__name}
        >{`${user.name.first} ${user.name.last}`}</p>
        <p className={styles.user__birthday}>{userBirthday}</p>
        <p className={styles.user__gender}>{user.gender}</p>
    </div>
);
