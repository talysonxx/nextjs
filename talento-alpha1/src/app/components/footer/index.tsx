'use client';

import Link from 'next/link';
import styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="/sobre">Sobre o Talentoo</Link>
            <span className={styles.separator}>|</span>
            <Link href="/termos">Termos de uso</Link>
        </footer>
    );
}
