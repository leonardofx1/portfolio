import styles from './styles.module.scss'
import Image from 'next/image'
import leo from '../../assets/leo.png'
import drizzle from '../../assets/drizzle.jpg'
import next from '../../assets/next.png'
import typescript from '../../assets/typescript.jpg'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import postgresql from '../../assets/postgresql.png'


export const HomeBody = () => {


    return (
        <main className={styles.containerMain}>
            <div className={styles.imgContainer}>

                <Image src={leo} alt='my image' />
                

            </div>
           <div className={styles.wrraperTitle}>
           <h2 className={styles.title}>Olá, eu sou o Leonardo. <br/> Desenvolvedor FullStack.</h2>
            <div className={styles.wrraperImg}>
            <Image src={drizzle} height={30} unoptimized width={30} alt='my image' />
            <Image src={next} height={30} unoptimized width={30} alt='my image' />
            <Image src={react} height={30} unoptimized width={30} alt='my image' />
            <Image src={typescript} height={30} unoptimized width={30} alt='my image' />
            <Image src={node} height={30} unoptimized width={30} alt='my image' />
            <Image src={postgresql} height={30} unoptimized width={30} alt='my image' />
            </div>
           </div>
        </main>
    )
}