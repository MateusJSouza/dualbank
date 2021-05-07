import printer from '../../assets/printer.svg'
import downloadFile from '../../assets/downloadFile.svg'
import share from '../../assets/share.svg'

import styles from './styles.module.scss'

export function Content() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.paragraph}>Saldo Bancário</p>

        <div className={styles.title}>

          <div className={styles.printer}>
            <img src={printer} className={styles.miniPrinter} alt="Printer" />
          </div>

          <div className={styles.downloadFile}>
            <img src={downloadFile} className={styles.miniDownloadFile} alt="Download file" />
          </div>
          <div className={styles.share}>
            <img src={share} className={styles.miniShare} alt="Share" />
          </div>
        </div>
      </div>
    </>
  );
}