// components/GoogleLoginButton.tsx
'use client'

import React from 'react';
import styles from './botao-google.module.css';

export default function BotaoGoogle({ onClick }: { onClick: () => void }) {
    return (
        <button className={styles.googleBtn} onClick={onClick}>
            <img src="/google-icon.svg" alt="Google logo" className={styles.icon} />
            <span className={styles.text}>Entrar com Google</span>
        </button>
    );
}
