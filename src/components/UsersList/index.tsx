import { useSelector } from 'react-redux';
import { User } from '../../components';
import { users as usersSelector } from '../../redux/users/selectors';

export const UsersList = () => {
    const users = useSelector(usersSelector);

    return (
        <ul>
            {users.map(user => (
                <User user={user} />
            ))}
        </ul>
    );
};
