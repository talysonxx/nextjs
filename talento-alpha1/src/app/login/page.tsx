// pages/login.tsx
'use client'

import BotaoGoogle from '@/app/components/botao-google';

export default function LoginPage() {
    const handleLogin = () => {
        // lógica do login com Google
        console.log('Login com Google');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <BotaoGoogle onClick={handleLogin} />
        </div>
    );
}
