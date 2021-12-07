
import styles from './Footer.module.scss';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import {FaCcVisa, FaCcMastercard} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si';

export const Footer = ( ) => {

  return (
    <div className={styles['footer']}>
      <a href="/">
      <img src="/img/cinica-logo.png" className="cursor-pointer w-auto self-center pl-8"  alt="Cínica Logo"/>
      </a>
      <div>
        <h2 className={styles['footer--title']}>NOSOTROS</h2>
        <ul>
          <li><a href="/contact">Atención al cliente</a></li>
          <li><a href="/terms-and-conditions">Términos y condiciones</a></li>
          <li><a href="/privacy-policy">Políticas de Privacidad</a></li>
        </ul>
      </div>
      <div className="flex flex-col justify-evenly">
        <div>
          <h3 className={styles['footer--title']}>PAGOS SEGUROS CON:</h3>
          <div className="flex justify-evenly w-1/3 pt-2">
              <FaCcVisa size={25}/>
              <FaCcMastercard size={25}/>
              <SiAmericanexpress size={25}/>
            </div>
          </div>
        <div>
            <h3 className={styles['footer--title']}>SÍGUENOS EN:</h3>
            <div className="flex justify-evenly w-1/4 pt-2">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cinicamx/"><BsFacebook size={20}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cinicamx/"><BsInstagram size={20}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com.mx/cinicamx/_saved/"><BsPinterest size={20}/></a>
            </div>
        </div>
      </div>
    </div>
)};