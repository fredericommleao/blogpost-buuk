import styles from '@/styles/TitleSecond.module.css' 

export default function TitleSecond(){
    return  <div className={styles.container} >
        <h1 className={styles.title}>
        Posts Relacionados
    </h1>
    <p style={
        { textAlign: "center" }} className={styles.text}>
        Conteúdo premium para estimular <br />o seu interesse pelo que fazemos.
      </p>
    </div>
  
}