import { format } from 'date-fns';
import { User } from '../../interfaces';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ user }: { user: User }) => {
    const { picture, name, dob, gender, location, phone, registered } = user;

    const parseDate = (date: string) => format(Date.parse(date), 'PP');

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
                    {parseDate(dob.date)}
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
                    {parseDate(registered.date)}
                </p>
            </div>
        </div>
    );
};
