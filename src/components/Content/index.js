import printer from '../../assets/printer.svg'
import downloadFile from '../../assets/downloadFile.svg'
import share from '../../assets/share.svg'
import caretDown from '../../assets/caretDown.svg'
import refresh from '../../assets/refresh.svg'
import eye from '../../assets/eye.svg'
import shield from '../../assets/shield.svg'

import styles from './styles.module.scss'

export function Content() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.paragraph}>Saldo Bancário</p>

        <div className={styles.title}>

          <div className={styles.printer}>
            <img src={printer} className={styles.miniPrinter} alt="Printer icon" />
          </div>

          <div className={styles.downloadFile}>
            <img src={downloadFile} className={styles.miniDownloadFile} alt="Download file icon" />
          </div>
          <div className={styles.share}>
            <img src={share} className={styles.miniShare} alt="Share" />
          </div>
        </div>
      </div>

      <div className={styles.balance}>
        <div className={styles.inputField}>
          <p>Data do Saldo</p>
          <span>07/12/2020</span>

          <img src={caretDown} alt="Carets down icon" />
        </div>
      </div>

      <div className={styles.balanceAtualized}>
        <p>Saldo atualizado às 16:48</p>

        <img src={refresh} alt="Refresh icon" />
      </div>

      <div className={styles.balanceAvailable}>
        <img src={shield} className={styles.shield}  alt="Shield icon" />

        <div className={styles.inputBalance}>

          <p>Saldo disponível</p>
          <span>R$40.000,00</span>

          <img src={eye} alt="Carets down icon" />
        </div>
      </div>
    </>
  );
}