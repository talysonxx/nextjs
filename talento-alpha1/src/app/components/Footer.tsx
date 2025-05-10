import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.linksContainer}>
                <Link href="/termos" className={styles.footerLink}>
                    Termos de Uso
                </Link>
                <span className={styles.divider}>•</span>
                <Link href="/privacidade" className={styles.footerLink}>
                    Política de Privacidade
                </Link>
                <span className={styles.divider}>•</span>
                <Link href="/contato" className={styles.footerLink}>
                    Contato
                </Link>
                <span className={styles.divider}>•</span>
                <Link href="/sobre-o-talentoo" className={styles.footerLink}>
                    Conheça a equipe Talentoo
                </Link>
            </div>
            <div className={styles.copyright}>
                &copy; {currentYear} Equipe Talentoo. Todos os direitos reservados.
            </div>
        </footer>
    );
}