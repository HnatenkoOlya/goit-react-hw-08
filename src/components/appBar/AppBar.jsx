import { Navigation } from '../Navigation';
import { UserMenu } from '../userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from '../authNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css'

export default function AppBar () {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};