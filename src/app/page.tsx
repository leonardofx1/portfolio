import { HomeBody } from '@/components/HomeBody';
import styles from './styles.module.scss'
import { Header } from '@/components/Header';
export default function Home() {
  return (
    <div className={styles.main} >
     <Header />
     <HomeBody />
    </div>
  );
}
