import { IUser } from '../../redux/interfaces';
import styles from './User.module.scss';

interface IProps {
    user: IUser;
}

export const User = ({ user }: IProps) => {
    const { name, picture, dob, gender } = user;

    const parseDate = (date: string) => new Date(date).toLocaleDateString();

    return (
        <li className={`${styles.person} ${styles[gender]}`}>
            <img
                className={styles.person__photo}
                src={picture.large}
                alt="User`s photo"
                width="130"
                height="130"
            />
            <p
                className={styles.person__name}
            >{`${name.first} ${name.last}`}</p>
            <p className={styles.person__birthday}>{parseDate(dob.date)}</p>
            <p className={styles.person__gender}>{gender}</p>
        </li>
    );
};
