//User story: frappe-511
import React, { useEffect, useState } from 'react';
import { ResetPasswordForm } from '@frappe/account/ui';
import { Card, Link } from '@frappe/common/design-system';
import styles from '../../styles/register.module.scss';
import { useRouter } from 'next/router';
import { auth } from '../../utils/third-party/firebase'
import { stringify } from 'querystring';
import { verifyPasswordResetCode } from '@firebase/auth';

const PasswordChangePage = () => {

  const [email, setEmail] = useState<string>();
  const { query } = useRouter();
  const code : string = stringify(query)
  const auxArr = code.split("=")

  useEffect(() => {
    if(auxArr[1] === undefined){
        return
    }
    async function verifyCode() {
      const resp = await verifyPasswordResetCode(auth, auxArr[1])
      setEmail(resp);
    }
    verifyCode();
  }, [auxArr])
  
    return (
    <div className={styles.wrapper}>
        <img className="flex mb-7" src={'/img/cinica-logo.png'} alt={'Cínica logo'} />

        <Card className="flex flex-col xl:w-1/4 lg:w-1/3 md:w-5/12 w-2/3 rounded-t-xl" rounded={false}>
        <Card.Header title={'Reestablecer tu contraseña'}>
            <h2>
            <Link href="/signin" text={' Iniciar sesión'} />
            </h2>
        </Card.Header>

        <ResetPasswordForm mail={email}/>

        <Card.Footer>
        </Card.Footer>
        </Card>
    </div>
    );
};

export default PasswordChangePage;
