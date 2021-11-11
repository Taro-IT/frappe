
import styles from './Footer.module.scss';
import {  useRouter } from 'next/router';

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
          {/* Insertar imagen correspondiente con métodos de pago. */}
          </div>
        <div>
            <h3 className={styles['footer--title']}>SÍGUENOS EN:</h3>
        </div>
      </div>
    </div>
)};