import { parseDate } from '../../utils/helpers';
import { User } from '../../interfaces';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ user }: { user: User }) => {
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
                    <b>Name:</b> {`${name.first} ${name.last}`}
                </p>
                <p>
                    <b>Date of Birth: </b>
                    {parseDate(new Date(dob.date))}
                </p>
                <p>
                    <b>Gender: </b>
                    {gender}
                </p>
                <p>
                    <b>Address: </b>
                    {location.city}
                </p>
                <p>
                    <b>Phone: </b>
                    {phone}
                </p>
                <p>
                    <b>Registration date: </b>
                    {parseDate(new Date(registered.date))}
                </p>
            </div>
        </div>
    );
};
