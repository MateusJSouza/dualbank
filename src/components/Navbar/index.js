import houseLine from '../../assets/houseLine.svg'
import chartPieSlice from '../../assets/chartPieSlice.svg'
import chartLineUp from '../../assets/chartLineUp.svg'
import money from '../../assets/money.svg'
import handshake from '../../assets/handshake.svg'
import creditCard from '../../assets/creditCard.svg'
import receipt from '../../assets/receipt.svg'
import wrench from '../../assets/wrench.svg'
import question from '../../assets/question.svg'
import eye from '../../assets/eye.svg'
import tag from '../../assets/tag.svg'
import add from '../../assets/add.svg'
import caretsTwo from '../../assets/caretsTwo.svg'

import pix from '../../assets/pix.png'

import styles from './styles.module.scss'

export function Navbar() {
  return (
    <>
      <div className={styles.content}>
        <nav className={styles.container}>
          <ul className={styles.icons}>
            <li><img src={houseLine} alt="house line" /></li>
            <li><img src={chartPieSlice} alt="chat pie slice" /></li>
            <li><img src={chartLineUp} alt="chart line up" /></li>
            <li><img src={money} alt="money" /></li>
            <li><img src={handshake} alt="handshake" /></li>
            <li><img src={pix} alt="house line" /></li>
            <li><img src={creditCard} alt="credit card" /></li>
            <li><img src={receipt} alt="receipt" /></li>
            <li><img src={wrench} alt="wrench" /></li>
            <li><img src={question} alt="question" /></li>

            <div className={styles.carets}>
              <img src={caretsTwo} className={styles.caretsTwo} alt="carets" />
            </div>
          </ul>

          <div className={styles.submenu}>
            <div className={styles.iconsMenu}>
              <div className={styles.tag}>
                <li><img src={tag} alt="tag" /></li>
              </div>
              <div className={styles.add}>
                <li><img src={add} alt="to add" /></li>
              </div>
            </div>

            <div className={styles.infoTotal}>
              <div className={styles.paragraph}>
                <p>P</p>
              </div>

              <div className={styles.total}>
                <p>Saldo</p>
                <img src={eye} alt="eye" />
              </div>
              <div className={styles.subtotal}>
                <span>R$40.000,00</span>
              </div>
            </div>

            <div className={styles.infoRent}>
              <div className={styles.paragraphTwo}>
                <p>A</p>
              </div>

              <div className={styles.rent}>
                <p>Aluguel</p>
                <img src={eye} alt="eye" />
              </div>
              <div className={styles.rentTotal}>
                <span>R$1.600,00</span>
              </div>
            </div>

            <div className={styles.infoAlimentation}>
              <div className={styles.paragraphThree}>
                <p>A</p>
              </div>

              <div className={styles.alimentation}>
                <p>Alimentação</p>
                <img src={eye} alt="eye" />
              </div>
              <div className={styles.alimentationTotal}>
                <span>R$450,00</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}