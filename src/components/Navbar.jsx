
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div style={styles.nav}>
      <span style={styles.brand}>Redux + JWT Demo</span>
      <span>
        {isAuthenticated ? `Logged in as: ${user?.sub}` : 'Not logged in'}
      </span>
    </div>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 16px',
    background: '#282c34',
    color: 'white',
    marginBottom: 16,
  },
  brand: {
    fontWeight: 'bold',
  },
};
