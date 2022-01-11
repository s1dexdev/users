import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner, Container } from '../../components';
import { loginRequest } from '../../redux/auth/actions';
import { loading } from '../../redux/auth/selectors';

export function LoginPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);

    const handleClick = (event: MouseEvent) => {
        event.preventDefault();

        dispatch(loginRequest());
    };

    return (
        <Container>
            <div>
                <h1>Login page</h1>
                <Button text="Log In" onHandleClick={handleClick} />
            </div>
            {isLoading ? <Spinner /> : null}
        </Container>
    );
}
