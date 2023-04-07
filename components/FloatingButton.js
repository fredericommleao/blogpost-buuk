import styles from '@/styles/FloatingButton.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

const Button = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
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

  const handleClick = () => {
    window.gtag('event', 'click', {
      event_category: 'floating_button',
      event_label: 'whatsapp',
    });
  };

  if (!showButton) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XYGHB0M64H"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-562NVWW');
        `}
      </Script>
      <div className={styles.container}>
        <button className={styles.button} onClick={handleClick}>
          <Image src="/assets/images/whatsapp.png" alt="botao de fale conosco" width={50} height={50} />
        </button>
        <h3>fale Conosco</h3>
      </div>
    </>
  );
};

export default Button;
