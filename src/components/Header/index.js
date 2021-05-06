import logoImg from '../../assets/logo.svg'
import copy from '../../assets/copy.svg'
import carets from '../../assets/carets.svg'
import eye from '../../assets/eye.svg'
import search from '../../assets/search.svg'
import chatText from '../../assets/chatText.svg'
import bell from '../../assets/bell.svg'
import calendar from '../../assets/calendar.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.navbar}>
          <img src={logoImg} className={styles.logo} alt="dualbank" />

          <div className={styles.infos}>
            <div className={styles.infoAccount}>
              <p>Conta Corrente</p>
              <img src={carets} alt="carets" />
            </div>

            <div className={styles.infoAgency}>
              <p>Ag. 00005-1</p>
              <span>C.C. 00000000000000000020-1</span>

              <img src={copy} alt="copy" />
            </div>
          </div>

          <div className={styles.infoTotal}>
            <div className={styles.total}>
              <p>Saldo</p>
              <img src={eye} alt="eye" />
            </div>
            <div className={styles.subtotal}>
              <span>R$40.000,00</span>
            </div>
          </div>
        </div>

        {/* DIREITA*/}
        <div className={styles.search}>
          <div className={styles.input}>
            <input
              placeholder="Pesquisa"
              className={styles.inputSearch}
              type="text"
            />

            <img src={search} className={styles.searchImg} alt="search" />
          </div>

          <div className={styles.icons}>
            <img
              src={chatText}
              className={styles.iconText}
              alt="Chat text"
            />
            <img
              src={calendar}
              alt="Calendar"
              className={styles.iconCalendar}
            />
            <img
              src={bell}
              alt="Bell"
              className={styles.iconBell}  
            />
          </div>

          <div className={styles.circle}></div>
        </div>
      </div>
    </>
  );
}