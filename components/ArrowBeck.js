import styles from '@/styles/ArrowBeck.module.css'
import Image from 'next/image'

export default function ArrowBeck(){
    return <section className={styles.container}>

        <p>Voltar para o Blog</p>
        <a href="#">
        <Image src="/assets/images/right-arrow.png" alt="flecha para mudar de página" height={50} width={50}  />
        </a>
    </section>
}