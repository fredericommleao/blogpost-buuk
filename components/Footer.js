import styles from '@/styles/Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.div}>
      <Image src="/assets/images/footer/Buuk_logo.png" alt="Logotipo da empresa" width={180} height={85.59} />
      
      </div>

      <div className={styles.div}>
  <p>ONDE ESTAMOS</p>
  <div className={styles.location}>
     <Image src="/assets/images/footer/Shape.png" alt="Espaço para imagem" height={19.98} width={17.41} />
    <span>Florianópolis/SC</span>
  </div>
  <div className={styles.location}>
     <Image src="/assets/images/footer/Shape.png" alt="Espaço para imagem" height={19.98} width={17.41}/>
    <span>São Paulo/SP</span>
  </div>
</div>

      <div className={`${styles.div} ${styles.socialMedia}`}>
  <p>NOSSAS REDES SOCIAIS</p>
  <ul>
    <li>
      <Link href="#">
        <Image src="/assets/images/footer/facebook.png" alt="Ícone do Facebook" height={23.85} width={24} />
      </Link>
    </li>
    <li>
      <Link href="#">
        <Image src="/assets/images/footer/twitter.png" alt="Ícone do Twitter" height={23.85} width={24}/>
      </Link>
    </li>
    <li>
      <Link href="#">
        <Image src="/assets/images/footer/instagram.png" alt="Ícone do Instagram" height={23.85} width={24}/>
      </Link>
    </li>
    <li>
      <Link href="#">
        <Image src="/assets/images/footer/linkedin.png" alt="Ícone do LinkedIn" height={23.85} width={24} />
      </Link>
    </li>
    <li>
      <Link href="#">
        <Image src="/assets/images/footer/youtube.png" alt="Ícone do YouTube" height={23.85} width={24} />
      </Link>
    </li>
  </ul>
  <p></p>
</div>
<div className={styles.bottom}>
        <p>© 2022 Buuk. Desenvolvido com conhecimento por Buuk</p>
      </div>
    </footer>
    
  );
}
