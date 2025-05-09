import { Navigation } from './Navigation';
import { UserMenu } from '../components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from './authNav/AuthNav';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export default function AppBar () {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};