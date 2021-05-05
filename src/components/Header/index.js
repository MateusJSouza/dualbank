import logoImg  from '../../assets/logo.svg'
import copy  from '../../assets/copy.svg'
import carets  from '../../assets/carets.svg'
import eye  from '../../assets/eye.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <img src={logoImg} alt="dualbank"/>

        <div className={styles.infos}>
          <div className={styles.infoAccount}>
            <p>Conta Corrente</p>
            <img src={carets} alt="carets"/>
          </div>

          <div className={styles.infoAgency}>
            <p>Ag. 00005-1</p>
            <span>C.C. 00000000000000000020-1</span>

            <img src={copy} alt="copy"/>
          </div>
        </div>

        <div className={styles.infoTotal}>
          <div className={styles.total}>
            <p>Saldo</p>
            <img src={eye} alt="eye"/>
          </div>
            <span>R$40.000,00</span>
        </div>
      </div>
    </>
  );
}