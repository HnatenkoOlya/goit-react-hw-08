import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.divNav}>
      <NavLink className={css.nav} to="/register">
        Register
      </NavLink>
      <NavLink className={css.nav} to="/login">
        Log In
      </NavLink>
    </div>
  );
};