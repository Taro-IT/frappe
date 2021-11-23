
import styles from './Footer.module.scss';
import {  useRouter } from 'next/router';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import {FaCcVisa, FaCcPaypal, FaCcMastercard} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si';

export const Footer = ( ) => {
  const router = useRouter();
  const redirectToHome = () => router.push("/");

  return (
    <div className={styles['footer']}>
      <img src="/img/cinica-logo.png" className="cursor-pointer w-auto self-center pl-8" alt="Cínica Logo" onClick={redirectToHome}/>
      <div>
        <h2 className={styles['footer--title']}>NOSOTROS</h2>
        <ul>
          <li><a>Atención al cliente</a></li>
          <li><a>Login</a></li>
          <li><a>Mi cuenta</a></li>
          <li><a>Términos y condiciones</a></li>
          <li><a>Políticas de Privacidad</a></li>
        </ul>
      </div>
      <div className="flex flex-col justify-evenly">
        <div>
          <h3 className={styles['footer--title']}>PAGOS SEGUROS CON:</h3>
          <div className="flex justify-evenly w-1/3 pt-2">
              <FaCcVisa size={25}/>
              <FaCcMastercard size={25}/>
              <SiAmericanexpress size={25}/>
              <FaCcPaypal size={25}/>
            </div>
          </div>
        <div>
            <h3 className={styles['footer--title']}>SÍGUENOS EN:</h3>
            <div className="flex justify-evenly w-1/4 pt-2">
              <a target="_blank" href="https://www.facebook.com/cinicamx/"><BsFacebook size={20}/></a>
              <a target="_blank" href="https://www.instagram.com/cinicamx/"><BsInstagram size={20}/></a>
              <a target="_blank" href="https://www.pinterest.com.mx/cinicamx/_saved/"><BsPinterest size={20}/></a>
            </div>
        </div>
      </div>
    </div>
)};