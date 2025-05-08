'use client'

// tela apenas para login do usuário

import { BotaoGoogle } from '@/app/components/botao-google';
import { Footer } from '@/app/components/footer';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    // lógica do login com Google

    router.push('/dashboard/main')
    console.log('Login com Google');
  };

  return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <BotaoGoogle onClick={handleLogin} />
        </div>

        <Footer />
      </div>
  );
}
