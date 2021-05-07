import printer from '../../assets/printer.svg'
import downloadFile from '../../assets/downloadFile.svg'
import share from '../../assets/share.svg'

import styles from './styles.module.scss'

export function Content() {
  return (
    <div className={styles.title}>
      <p>Saldo Bancário</p>

      <div>
        <img src={printer} alt="Printer" />
      </div>
        
      <div>
        <img src={downloadFile} alt="Download file" />
      </div>
      <div>
        <img src={share} alt="Share" />
      </div>
    </div>
  );
}