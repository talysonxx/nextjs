import Logo from './components/Logo';
import LoginButton from './components/LoginButton';
import styles from './page.module.css';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <Logo />
        <p className={styles.slogan}>Um lugar onde você tem tudo!</p>
        <LoginButton />
      </div>
    </main>
  );
}
