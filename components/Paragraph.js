import styles from '@/styles/Paragraph.module.css' 

import FloatingButton from './FloatingButton'

export default function Paragraph(){
    return (
        <>
        <div className={styles.container}>
        <p className={styles.text}>
        Os preparativos para a participação em um evento costumam ser atarefados para quem oferece e cansativos para quem participa. No entanto, há um arquivo que pode mudar o cenário para ambos, diminuindo o tempo destinado à retirada de dúvidas e causando boas impressões: o chamado de <b>&apos;Presstrip&apos;</b>, <b>&apos;Travelbook&apos;</b> ou <b>&apos;Livro de viagem&apos;</b>. 
        </p>
        <h3 className={styles.h3}>Saiba o porquê enviar</h3>
        <p className={styles.text}>
        Há convidados/participantes que moram em outra cidade, estado e/ou país? Então é necessário. Essa obrigatoriedade no envio se dá ao benefício de estimular que a experiência do evento seja tranquila durante os preparativos de quem irá se deslocar e minimza os imprevistos durante a viagem. 
        </p>
        <p className={styles.text}>
        Além de mitigar os custos com atendimento e oferecer ao participante informações que o tranquilizem, podemos destacar o benefício de direcionar as pessoas a realizarem atividades que tem relação com o evento, estimulando o networking entre os participantes - o que pode tornar a relevância do evento ainda maior para quem participa.
        </p>
        <h3 className={styles.h3}>O conteúdo</h3>
        <p className={styles.text}>
        O conteúdo informa sobre a agenda o evento, as opções de estadia e translado, as recomendações gerais, informações sobre o tempo, contatos e considerações gerais que a organização do workshop, palestra, show, festa de aniversário, congresso ou feira considere relevantes.
        Considere incluir imagens, mapas, telefones e endereços reunidos em um arquivo de fácil visualização e acesso. Incluir dezenas de informações em um texto de e-mail e/ou mensagem de aplicativo de conversas instantâneas não é legal. Priorize uma página web ou um documento PDF e tenha atenção ao tamanho das fontes e cores utilizadas.
        </p>
        <h3 className={styles.h3}>Credibilidade é importante</h3>
        <p className={styles.text}>
        Certifique-se que o destinatário do documento terá ciência a respeito do remetente - a equipe de organização do evento. Qualquer indivíduo tem todas as razões para desconfiar de informações que chegam sem um esclarecimento de quem enviou, principalmente com informações de um local que ele não conhece.
        </p>
        <h3 className={styles.h3}>Entenda quando enviar</h3>
        <p className={styles.text}>
        A nossa dica é que o envio do <b>&apos;Presstrip&apos;</b> aconteça junto ao convite ou ingresso. O seu formato pode ser impresso ou digital, contudo, se o material for impresso deve-se considerar com atenção a data de envio, já que materiais físicos dependem do prazo da logística de entrega e será desagradável se o recebimento acontecer após o evento ter acontecido. 
        </p>
        <p className={styles.text}>
        Nos casos do envio digital, pense na maneira que fará a confirmação do recebimento do participante. Será frustrante para todos se, mediante um imprevisto evitável, souberem que havia um e-mail perdido na lixeira com soluções viáveis que deveriam ter sido revisadas com antecedência.
        </p>
        <h3 className={styles.h3}>Considerações gerais</h3>
        <p className={styles.text}>
        De acordo com os relatórios de busca do <a href="https://pt.semrush.com/">SEMRUSH</a>, esse termo é muito mais buscado em países como Argentina, México e Peru, mas devemos motivar essa prática no Brasil também. Os eventos tem uma oportunidade de obterem sucesso, evite arriscar. Comercialmente falando, não é interessante que os participantes tenham uma má experiência, ainda que a pauta do evento seja pioneira ou muito relevante. Desenvolva um material com informações importantes, nem tudo que parece óbvio realmente é uma obviedade para outras pessoas. 
        </p>
        <FloatingButton />
        <p className={styles.text}>
        Precisa de ajuda para desenvolver o seu <b>&apos;presstrip&apos;</b>? Entre em contato conosco clicando <a href="https://www.buuk.com.br/contato">aqui</a>.
        </p>
    </div>
        </>
    )
}