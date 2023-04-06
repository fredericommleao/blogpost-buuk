import styles from '@/styles/FloatingButton.module.css'
import { useState, useEffect } from 'react';
import Image from 'next/image'

const Button = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1250) { // mostra o botão quando o scroll estiver maior do que 500 pixels
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!showButton) {
    return null; // se showButton for false, não renderiza nada
  }

  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <Image src="/assets/images/whatsapp.png" alt="botao de fale conosco" width={50} height={50} />
      </button>
      <h3>Chegou até aqui? <br/> fale Conosco</h3>
    </div>
  )
}

export default Button
