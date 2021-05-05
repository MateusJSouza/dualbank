import logoImg  from '../../assets/logo.svg'
import copy  from '../../assets/copy.svg'
import carets  from '../../assets/carets.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <img src={logoImg} alt="dualbank"/>

        <p>Conta Corrent</p>
        <img src={carets} alt=""/>
        
        <p>Ag. 00005-1</p>
        <p>C.C. 00000000000000000020-1</p>

        <img src={copy} alt=""/>

        <p>Saldo</p>
        <span>R$40.000,00</span>
      </div>
    </>
  );
}