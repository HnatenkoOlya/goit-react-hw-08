import { Outlet } from 'react-router-dom';
import AppBar from './appBar/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar />
      <main style={{
          padding: '24px',
        }}>
        <Outlet />
      </main>
    </>
  );
}