import styles from '@/styles/Footer.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.div}>
      <img src="/assets/images/footer/Buuk_logo.png" alt="Logotipo da empresa" width={177} />
      
      </div>

      <div className={styles.div}>
  <p>ONDE ESTAMOS</p>
  <div className={styles.location}>
     <img src="/assets/images/footer/Shape.png" alt="Espaço para imagem" />
    <span>Florianópolis/SC</span>
  </div>
  <div className={styles.location}>
     <img src="/assets/images/footer/Shape.png" alt="Espaço para imagem" />
    <span>São Paulo/SP</span>
  </div>
</div>

      <div className={`${styles.div} ${styles.socialMedia}`}>
  <p>NOSSAS REDES SOCIAIS</p>
  <ul>
    <li>
      <Link href="#">
        <img src="/assets/images/footer/facebook.png" alt="Ícone do Facebook" />
      </Link>
    </li>
    <li>
      <Link href="#">
        <img src="/assets/images/footer/twitter.png" alt="Ícone do Twitter" />
      </Link>
    </li>
    <li>
      <Link href="#">
        <img src="/assets/images/footer/instagram.png" alt="Ícone do Instagram" />
      </Link>
    </li>
    <li>
      <Link href="#">
        <img src="/assets/images/footer/linkedin.png" alt="Ícone do LinkedIn" />
      </Link>
    </li>
    <li>
      <Link href="#">
        <img src="/assets/images/footer/youtube.png" alt="Ícone do YouTube" />
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
