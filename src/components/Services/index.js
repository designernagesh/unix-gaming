import { servicesData } from "../../data/data";
import styles from './index.module.scss';

function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <ul className={styles.servicesList}>
          {
            servicesData.map(service => {
              const { id, count, image, name } = service;
              return <li key={id}>
                <span>{count}</span>
                <div className={styles.image}>
                  <img src={`./assets/images/${image}`} alt={name} />
                </div>
                <p>{name}</p>
              </li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Services
