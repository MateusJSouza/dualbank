import houseLine from '../../assets/houseLine.svg'
import chartPieSlice from '../../assets/chartPieSlice.svg'
import chartLineUp from '../../assets/chartLineUp.svg'
import money from '../../assets/money.svg'
import handshake from '../../assets/handshake.svg'
import pix from '../../assets/pix.png'
import creditCard from '../../assets/creditCard.svg'
import receipt from '../../assets/receipt.svg'
import wrench from '../../assets/wrench.svg'
import question from '../../assets/question.svg'

import styles from './styles.module.scss'

export function Navbar() {
  return (
    <nav className={styles.container}>
      <ul>
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
      </ul>
    </nav>
  );
}