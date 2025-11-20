
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

function App() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.content}>
          <LoginForm />
          <Profile />
        </div>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
  },

  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 16px',
  },

  content: {
    width: '100%',
    maxWidth: 600, 
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
};

export default App;


