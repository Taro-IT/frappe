
import styles from './Footer.module.scss';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import {FaCcVisa, FaCcMastercard} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si';

export const Footer = ( ) => {

  return (
    <div className={styles['footer']}>
      <div className="flex flex-col justify-evenly justify-self-center pl-4 col-span-1">
        <a href="/">
        <img src="/img/cinica-logo.png" className="cursor-pointer w-1/4 self-center pb-2"  alt="Cínica Logo"/>
        </a>
        <div>
          <p>5521944332</p>
          <p>hola@cinica.mx</p>
        </div>
        <div>
            <h3 className={styles['footer--title']}>SÍGUENOS EN:</h3>
            <div className="flex justify-evenly w-1/4">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cinicamx/"><BsFacebook size={20}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cinicamx/"><BsInstagram size={20}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com.mx/cinicamx/"><BsPinterest size={20}/></a>
            </div>
        </div>
      </div>
      <div className="justify-self-center col-span-1">
        <h2 className={styles['footer--title']}>NOSOTROS</h2>
        <ul>
          <li><a href="/">Cínica</a></li>
          <li><a href="/contact">Atención al cliente</a></li>
          <li><a href="">Manifiesto</a></li>
          <li><a href="/store">Shop</a></li>
        </ul>
      </div>
      <div className="flex flex-col justify-evenly col-span-1 justify-self-center">
        <div>
          <ul>
            <li><a href="">Políticas de Garantía</a></li>
            <li><a href="">Cambios y Devoluciones</a></li>
            <li><a href="">Facturación</a></li>
          </ul>
          <h3 className={styles['footer--title']}>PAGOS SEGUROS CON:</h3>
          <div className="flex justify-evenly w-1/3 pt-2">
              <FaCcVisa size={25}/>
              <FaCcMastercard size={25}/>
              <SiAmericanexpress size={25}/>
            </div>
          </div>
      </div>
      <div className="flex flex-row justify-self-center col-span-3">
        <a href="/terms-and-conditions">Términos y condiciones </a>
        <p>&nbsp;//&nbsp;</p>
        <a href="/privacy-policy"> Políticas de Privacidad</a>
      </div>
    </div>
)};