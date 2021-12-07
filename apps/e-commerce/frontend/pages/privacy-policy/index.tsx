import React from 'react';
import { EcommerceLayout, withUserAgent } from '@frappe/common/design-system';

const PrivacyPolicy = () => {

  return (
    <div className="self-center w-2/3 pt-8 pb-8">
      <h1 className="text-center text-xl font-bold">POLÍTICAS DE PRIVACIDAD</h1>
      <p>
      Dora Elena Gómez Sánchez,  con  domicilio  en 
      Segunda Cerrada de Romero de Terreros 52, casa 4, Del Valle, Benito Juárez, 03100, Ciudad de México,  es  responsable  
      de  recabar sus datos personales, del uso que se le dé a los mismos y de su protección.     
        </p>
        <br/>
        <p>
        Su  información  personal  será  utilizada  para  proveer  los  servicios  y  productos  que  ha  
        solicitado,  informarle sobre cambios en los mismos y evaluar la calidad del servicio 
        que le brindamos. Para las  finalidades  antes  mencionadas,  requerimos  obtener  los  siguientes  
        datos  personales:  Nombre completo, domicilio (código postal, estado, país, ciudad o municipio, 
        colonia, localidad, calle, número exterior e interior),  teléfono fijo, correo electrónico,  
        considerado  como  sensible  según  la  Ley  Federal  de  Protección  de  Datos  Personales  en  
        Posesión de los Particulares.

        </p>
        <br/>
        <p>
        Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, así como de oponerse  
        al  tratamiento  de  los  mismos  o  revocar  el  consentimiento  que  para  tal  fin  nos  haya  
        otorgado,  a  través de los procedimientos que hemos implementado. Para conocer dichos procedimientos, 
        los  requisitos y plazos, se puede poner en contacto con nuestro departamento de datos personales en 
        el número telefónico <b>5521944332</b> o  visitar  nuestra  página  de 
          Internet <a href="store.cinica.mx/contact" >store.cinica.mx/contact.</a>
        </p>
        <br/>
        <p>
        Asimismo,  le  informamos  que  sus  datos  personales  pueden  ser  transferidos  y  tratados  
        dentro  y  fuera  del  país,  por  personas  distintas  a  esta  empresa.  En  ese  sentido,  
        su  información  puede  ser  compartida con empresas de envíos de paquetes nacionales. Si usted no
        manifiesta su oposición para que sus datos personales sean transferidos,  
        se entenderá que ha otorgado su consentimiento para ello. 
        </p>
        <br/>
        <p>
        Si usted desea dejar de recibir mensajes promocionales de nuestra parte puede solicitarlo a través 
        de nuestra página de contacto: <a href="store.cinica.mx/contact" >store.cinica.mx/contact.</a> 
        </p>
        <p>
        Cualquier modificación a este aviso de privacidad podrá consultarla por este mismo medio.
        </p>
        <br/>
        <p>
        Fecha última actualización [06/12/2021]
        </p>
      </div>
  )
  }

  PrivacyPolicy.Layout = EcommerceLayout;

export default withUserAgent(PrivacyPolicy);