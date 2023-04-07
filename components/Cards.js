import Image from 'next/image';
import styles from '@/styles/Cards.module.css'

export default function Cards(){
    return (
            <div className={styles.cardSection}>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                    <Image 
                        src="/assets/images/cards/Image.png"
                        alt="Logo da empresa"
                        width={413}
                        height={192}
                    />
                    </div>

                    <div className={styles.cardContent}>

                    <p className={styles.cardTitleMin}>
                        Article
                    </p>

                    <h2 className={styles.cardTitle}>Boost your conversion rate</h2>

                    <p className={styles.cardText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                    </p>
                   
                    

                    <div className={styles.cardAuthor1}>
                    <Image 
                        src="/assets/images/cards/Avatar.png"
                        alt="Logo da empresa"
                        width={40}
                        height={40}
                    />
                        <span >Nome do Autor <br/> 1 - 01/02/2022</span>
                    </div>
                    </div>
                </div>
            

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                    <Image 
                        src="/assets/images/cards/Image.png"
                        alt="Logo da empresa"
                        width={413}
                        height={192}
                    />
                    </div>

                    <div className={styles.cardContent}>

                    <p className={styles.cardTitleMin}>
                        Video
                    </p>

                    <h2 className={styles.cardTitle}>How to use search engine optimization to drive sales</h2>

                    <p className={styles.cardText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi.
                    </p>

                    <div className={styles.cardAuthor}>
                    <Image 
                        src="/assets/images/cards/Avatar.png"
                        alt="Logo da empresa"
                        width={40}
                        height={40}
                    />
                  
                        <span>Nome do Autor <br/> 2 - 01/02/2022</span>
                    </div>                 
                    </div>
                </div>
            

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                    <Image 
                        src="/assets/images/cards/Image.png"
                        alt="Logo da empresa"
                        width={413}
                        height={192}
                    />
                    </div>
                    <div className={styles.cardContent}>

                    <p className={styles.cardTitleMin}>
                        Case Study
                    </p>

                    <h2 className={styles.cardTitle}>How to use search engine optimization to drive sales</h2>

                    <p className={styles.cardText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                    </p>

                    <div className={styles.cardAuthor}>
                    <Image 
                        src="/assets/images/cards/Avatar.png"
                        alt="Logo da empresa"
                        width={40}
                        height={40}
                    />
                        <span>Nome do Autor <br/> 3 - 01/03/2022</span>

                    </div>
                    </div>
                </div>
            </div>
      );
}