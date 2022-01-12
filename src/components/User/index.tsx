import { IUser } from '../../redux/interfaces';

interface IProps {
    user: IUser;
}

export const User = ({ user }: IProps) => {
    return <li>{user.gender}</li>;
};
