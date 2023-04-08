import Image from 'next/image';
import styles from '@/styles/Logo.module.css'

export default function Logo(){
    return  (
    <div className={styles.container}>
        <Image 
            src="/assets/images/menu/logo-part-1.png"
            alt="Logo da empresa"
            width={85.93}
            height={24}
        />
        <br/>
        <Image
            src="/assets/images/menu/logo-part-2.png"
            alt="Logo da empresa"
            width={83}
            height={9}
        />
    </div>)
}