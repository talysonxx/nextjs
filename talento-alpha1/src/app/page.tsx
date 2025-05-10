import Logo from './components/Logo';
import LoginButton from './components/LoginButton';
import Footer from './components/Footer';
import styles from './page.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <Logo />
          <p className={styles.slogan}>Um lugar onde você tem tudo!</p>
          <LoginButton />
        </div>
      </main>
      <Footer />
    </div>
  );
}
