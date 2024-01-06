import heroImg from '../../assets/images/hero.png';
import styles from './index.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Kickstart your web3 game</h1>
          <p className={styles.text}>unix gaming provides what all games need to succed: gamers, technology & funding </p>
          <button type='button' className={styles.heroBtn}>Kickstart my game</button>
        </div>
        <div className={styles.image}>
          <img src={heroImg} alt='hero' />
        </div>
      </div>
    </div>
  )
}

export default Hero
