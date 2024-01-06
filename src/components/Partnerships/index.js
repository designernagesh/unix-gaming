import { partnershipsData } from "../../data/data";
import styles from './index.module.scss';

function Partnerships() {
  return (
    <section className={styles.partnerships}>
      <h2 className={styles.title}>Partnerships</h2>
      <ul className={styles.partnershipsList}>
        {
          partnershipsData.map( partner => {
            const { id, image, name } = partner;
            return (
              <li key={id}>
                <img src={`./assets/images/${image}`} alt={name} />
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Partnerships
