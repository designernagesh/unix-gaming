import join from '../../assets/images/join.png';
import styles from './index.module.scss';

function SubscribeEmail() {
  return (
    <section className={styles.subscribeEmail}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Get unix gaming updates.</h2>
          <p className={styles.text}>when it comes to partnering new blockchain games, we only want to partner with project of class,continue to drive the future evolution of blockchaining games.</p>

          <div className={styles.inputGroup}>
            <input type={styles.text} placeholder='Youe email here' />
            <button type='button'>Submit</button>
          </div>
        </div>

        <div className={styles.image}>
          <img src={join} alt='join' />
        </div>
      </div>
    </section>
  )
}

export default SubscribeEmail
