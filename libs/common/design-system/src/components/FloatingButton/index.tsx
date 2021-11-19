import styles from './FloatingButton.module.scss';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';


export const FloatingButton = () => {

  return <div className={styles.btn}>
    <a href="help">
    <QuestionMarkCircleIcon className="w-16 h-18" />
    </a>
  </div>

}

