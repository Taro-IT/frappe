import 'firebase/auth';
import styles from '../styles/register.module.scss';
import { Card, Link } from '@frappe/common/design-system';
import { LoginForm } from '@frappe/account/ui';
import React from 'react';
import { useAuth } from '../context/AuthUserContext';

const SigninPage = () => {
  const { signInWithCredentials } = useAuth();

  return (
    <div className={styles.wrapper}>
      <img className="flex mb-7 pt-16" src={'/img/cinica-logo.png'} alt={'Cínica logo'} />

      <Card className="flex flex-col xl:w-1/4 lg:w-1/3 md:w-5/12 w-2/3 rounded-xl" rounded={false}>
        <Card.Header title={'Iniciar Sesión'}>
        </Card.Header>

        <LoginForm onSubmit={signInWithCredentials} />

        <Card.Footer>
          <h2>
            <Link href="/password-recovery" text={' ¿Olvidaste tu contraseña?'} />
          </h2>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SigninPage;
