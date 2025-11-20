
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';


export default function LoginForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    dispatch(login({ username })); 
    setUsername('');
  };

  return (
    <div style={styles.card}>
      <h2>Login</h2>
      <p>Type any username to simulate login and get a fake JWT.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button style={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: 10,
    padding: 24,          // bigger padding
    width: '100%',
    maxWidth: 600,        // bigger card
    background: 'white',
    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
  },
  form: {
    display: 'flex',
    gap: 10,
    marginTop: 12,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
  },
  button: {
    padding: '10px 18px',
    cursor: 'pointer',
    fontSize: 14,
  },
};

