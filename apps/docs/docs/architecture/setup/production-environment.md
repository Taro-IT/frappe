---
title: Ambiente de Producción
sidebar_position: 2
---

# Ambiente de Producción

## Tecnologías

- Firebase Hosting - Alojamiento de Front-End

  - ¿Por qué?
    - Servicio gratuito hasta 10 GB y con 360 MB al día de data transfer
    - Si se opta por el plan de prepago son $ 0.0026 por GB de almacenamiento y $ 0.15 por GB de transferencia de datos
    - Ambos planes (gratuito y de prepago) incluyen un dominio custom y SSL
    - Sencilla implementación
    - Se puede automatizar su despliegue a producción

- Firebase Auth

  - ¿Por qué?
    - Plan gratuito con hasta 10,000 autenticaciones al mes (vía telefónica) internacionalmente
    - Permite tanto autenticación telefónica como "otros servicios de autenticación"
    - Implementación rápida
    - Garantías de seguridad
    - Es parte de la plataforma de Firebase

- Microsoft Azure

  - App Service
    - ¿Por qué?
      - Facilidad de uso
      - Se encarga de la actualización de dependencias
      - Se puede automatizar el despliegue
  - Azure Cosmos DB
    - Precios flexibles/baratos
    - Soporte para Mongo DB
    - Actualizaciones de seguridad
    - Copias periódicas de respaldos
    - Escalabilidad

- Factorum

  - Es el sistema contratado actualmente por la socia

- Motor de pagos

  - Stripe
    - Pros
      - La tarifa fija por cobro exitoso no incluye el IVA
      - Facilita la expansión al extranjero con muchos métodos de pago
      - Fácil implementación y buena documentación
      - Proporciona herramientas de análisis
      - Muy buena reputación
    - Cons
      - El porcentaje de comisión es mayor que con Conekta
      - No tiene soporte para transferencias SEPI
      - La documentación no esta traducida al español al 100 %
  - Conekta
    - Pros
      - Mejor porcentaje de comisión
      - Buena documentación
      - Permite los pagos por transferencia SEPI
    - Cons
      - No facilita tanto el crecimiento internacional
      - No hay muchas empresas conocidas que lo usen

- Skydropx

  - Implementación gratuita
  - Ofrece retornos
  - Ofrece herramientas de informes y analítica
  - Bien documentada y muy usada a nivel nacional

- SendGrid
  - Las necesidades de negocio se cubren con el plan gratuito de la aplicación
  - Bien documentado
  - Tiene un editor de templates de correo
  - Provee analítica
  - No llega a "spam"
  - Tiene correo profesional con dominio
