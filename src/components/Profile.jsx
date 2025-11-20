
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export default function Profile() {
  
  const { isAuthenticated, user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div style={styles.card}>
      <h2>Profile</h2>
      <p><strong>Username:</strong> {user?.sub}</p>
      <p><strong>Role:</strong> {user?.role}</p>
      <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>

      <h3>JWT Token (fake)</h3>
      <code style={styles.token}>{token}</code>

      <button style={styles.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: 8,
    padding: 16,
    maxWidth: 600,
    marginTop: 16,
  },
  token: {
    display: 'block',
    wordBreak: 'break-all',
    margin: '8px 0',
    padding: 8,
    background: '#f5f5f5',
  },
  button: {
    padding: '6px 12px',
    cursor: 'pointer',
  },
};
