//User story: frappe-503
import React from 'react';
import { PasswordRecoveryRequestEmailForm } from '@frappe/account/ui';
import { Card, Link } from '@frappe/common/design-system';

import styles from '../../styles/register.module.scss';

const PasswordRecoveryPage = () => (
  <div className={styles.wrapper}>
    <img className="flex mb-7" src={'/img/cinica-logo.png'} alt={'Cínica logo'} />

    <Card className="flex flex-col xl:w-1/4 lg:w-1/3 md:w-5/12 w-2/3 rounded-t-xl" rounded={false}>
      <Card.Header title={'Reestablecer tu contraseña'}>
        <h2>
          <Link href="/signin" text={' Iniciar sesión'} />
        </h2>
      </Card.Header>

      <PasswordRecoveryRequestEmailForm />

      <Card.Footer>
      </Card.Footer>
    </Card>
  </div>
);

export default PasswordRecoveryPage;
