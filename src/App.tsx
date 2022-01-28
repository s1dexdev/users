import { useSelector } from 'react-redux';
import { AppBarContainer } from './containers';
import { Router, Header, Container } from './components';
import { isAuthenticatedSelector } from './redux/auth/selectors';

function App() {
    const isAuth = useSelector(isAuthenticatedSelector);

    return (
        <>
            <Header />
            <Container>
                {isAuth && <AppBarContainer />}
                <Router />
            </Container>
        </>
    );
}

export default App;
