import platformGamers from '../../assets/images/platform-gamers.png';
import product from '../../assets/images/product.png';
import cart from '../../assets/images/cart.png';
import { useState } from "react";
import { ecosystemData } from "../../data/data";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright } from "react-icons/io";
import styles from './index.module.scss';

function Ecosystem() {
  const [openAccordion, setOpenAccordion] = useState(ecosystemData[0].id);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <section className={styles.ecosystem}>

      <div className={styles.titleContainer}>
        <h2 className={styles.title}>The unix ecosystem</h2>
        <p className={styles.text}>wanted is a web3 social app created for discovery. you tell us what you’re
          interested in, and we help you find others to share your interests.</p>
      </div>

      <div className={styles.ecoInfo}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={platformGamers} alt='Platform Gamers' />
          </div>
          <div className={styles.accordion}>
            {ecosystemData.map(item => {
              const { id, question, description, points } = item;
              console.log("points", points)
              return (
                <div className={styles.wrapper} key={id}>
                  <div className={`${styles.question} ${openAccordion === id ? `${styles.open}` : ''}`} onClick={() => toggleAccordion(id)}>
                    {openAccordion === id ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                    {question}
                  </div>
                  <div className={`${styles.content} ${openAccordion === id ? `${styles.open} marginTop` : ''}`}>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.pointsList}>
                      {
                        points.map(item => {
                          return <li>
                            <IoMdArrowDropright /> {item}
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.customerProduct}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Product, defined by it’s customer</h2>
            <p className={styles.text}>wanted is a web3 social app created for discovery. you tell us what you’re interested in, and we help you find others to share your interests.</p>
            <button type='button' className={styles.productBtn}>
              <span className={styles.icon}>
                <img src={cart} alt='cart' />
              </span>
              <span className={styles.btnText}>Buy unix token</span>
            </button>
          </div>
          <div className={styles.image}>
            <img src={product} alt='Customer Product' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
