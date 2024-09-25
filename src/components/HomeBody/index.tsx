import styles from './styles.module.scss'
import Image from 'next/image'
import leo from '../../assets/leo.png'

export const HomeBody = () => {


    return (
        <main className={styles.containerMain}>
            <div className={styles.imgContainer}>

                <Image src={leo} alt='my image' />
                

            </div>
            <h2 className={styles.title}>Olá, eu sou o Leonardo. <br/> Desenvolvedor FullStack.</h2>

        </main>
    )
}