import React from 'react';
import { RegisterForm } from '@frappe/account/ui';
import { Card, Link } from '@frappe/common/design-system';

import styles from '../styles/register.module.scss';

const RegisterPage = () => (
  <div className={styles.wrapper}>
    <img className="flex mb-7" src={'/img/cinica-logo.png'} alt={'Cínica logo'} />

    <Card className="flex flex-col xl:w-1/4 lg:w-1/3 md:w-5/12 w-2/3 rounded-xl" rounded={false}>
      <Card.Header title={'Crear una cuenta'}>
        <h2>
          ¿Ya tienes una cuenta?
          <Link href="/signin" text={' Iniciar sesión'} />
        </h2>
      </Card.Header>

      <RegisterForm />

      <Card.Footer>
        <h2>
          <Link href="/password-recovery" text={' ¿Olvidaste tu contraseña?'} />
        </h2>
      </Card.Footer>
    </Card>
  </div>
);

export default RegisterPage;
