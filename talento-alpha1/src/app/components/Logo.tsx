import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <Image
                src="/images/logo.svg"
                width={80}
                height={80}
                alt="Logo do Site"
                className={styles.logo}
            />
        </div>
    );
}