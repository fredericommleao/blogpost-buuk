import styles from '@/styles/Content.module.css' 
import Title from './Title'
import SubTitle from './SubTitle'
import Paragraph from './Paragraph'

export default function Content(){
    return <main className={styles.container}>
        <Title/>
        <SubTitle/>
        <Paragraph/>     
    </main>
}