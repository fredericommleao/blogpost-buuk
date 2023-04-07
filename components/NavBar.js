import Link from 'next/link';
import Logo from '../components/Logo'
import styles from '@/styles/NavBar.module.css'
import Image from 'next/image';

export default function Navbar() {
    return (
        <>
            <header className={styles.container}>
            <Logo />
            <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                        <Link href="/" className={styles.liArrow}>
                            Serviços 
                            <Image  className={styles.arrow} src="/assets/images/menu/Icon.png"
                        alt="Logo da empresa"
                        width={10}
                        height={6}     
                        />
                        </Link>
                        
                        </li>
                        <li className={styles.li}>
                        <Link href="/about" className={styles.Link}>
                            Quem Somos
                        </Link>
                        </li>
                        <li className={styles.li}>
                        <Link href="/contact" className={styles.Link}>
                            Blog
                        </Link>
                        </li>
                        <li className={styles.li}>
                        <Link href="/contact" className={styles.Link}>
                            Contato
                        </Link>
                        </li>
                    </ul>
            </nav>
        </header>
        </>
      );
}