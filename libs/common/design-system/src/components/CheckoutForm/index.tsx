//User story: frappe-981
import { Button, Modal } from '../../index';
import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';

export function CheckoutForm() {
  const [clientName, setClientName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [company, setCompany] = useState<string>();
  const [address1, setAddress1] = useState<string>();
  const [address2, setAddress2] = useState<string>();
  const [reference, setReference] = useState<string>();
  const [city, setCity] = useState<string>();
  const [province, setProvince] = useState<string>();
  const [country] = useState<string>("Mexico");
  const [zip, setZip] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [showRetroModal, setShowRetroModal] = useState<boolean>(false);
  const [success,] = useState<boolean>();
  const [message,] = useState<string>();



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (loading === true) {
      return;
    }
    setLoading(true);
    storeDataInLocalStorage();
    handlePayment();
  };

  const handlePayment = async () => {
    const products = JSON.parse(localStorage.getItem('items')||"[]")
    const stripeItems = products.map((product : any) => (
      {
        id: product.productId,
        quantity: parseInt(product.quantity,0)
      }
    ))
    console.log(products);

    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payments`, {
      items: stripeItems
    });
    window.location.href = data.session.url
  }

  const storeDataInLocalStorage = () => {
    console.log(country);
    const address = {
      province: province,
      city: city,
      name: clientName,
      zip: zip,
      country: country,
      address1: address1,
      phone: phone,
      email: email,
      company: company ? company : null,
      address2: address2 ? address2 : null,
      reference: reference ? reference : null
    };

    localStorage.setItem('clientName', clientName || "");
    localStorage.setItem('address', JSON.stringify(address));

    console.log(JSON.parse(localStorage.getItem('items')||"[]"));
    console.log(localStorage.getItem('clientName'));
    console.log(JSON.parse(localStorage.getItem('address')||"[]"));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const handleAddress1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(e.target.value);
  };

  const handleAddress2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value);
  };

  const handleReferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReference(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvince(e.target.value);
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
  };

  return (
    <>
      <form className="w-full inline-block text-center" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium text-gray-900">Información de contacto</h2>
        <div className="mt-4">
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
            Nombre del recipiente*
          </label>
          <div className="mt-1">
            <input
              type="text"
              required
              id="clientName"
              placeholder="Juan Pérez"
              name="clientName"
              autoComplete="given-name"
              className="p-2 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico*
          </label>
          <div className="mt-4">
            <input
              required
              type="email"
              id="email"
              placeholder="ejemplo@hotmail.com"
              name="email"
              autoComplete="email"
              className="mb-4 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Número telefónico*
          </label>
          <div className="mt-4">
            <input
              required
              type="text"
              placeholder="222 2 22 22 22"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="mb-4 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <hr className="mt-4 mx-12" />
        <h2 className="text-lg font-medium mt-4 mb-4 text-gray-900">Información de envío</h2>

        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Compañía
          </label>
          <div className="mt-4">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Cínica"
              className="mb-4 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={company}
              onChange={handleCompanyChange}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
            Dirección de envío principal*
          </label>
          <div className="mt-4">
            <input
              required
              type="text"
              placeholder="Colonia, Calle, número exterior, número interior"
              name="address1"
              id="address1"
              autoComplete="street-address"
              className="mb-4 p-2 w-1/2  border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={address1}
              onChange={handleAddress1Change}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
            Dirección de envío secundaria
          </label>
          <div className="mt-4">
            <input
              type="text"
              name="address2"
              placeholder="Colonia, Calle, número exterior, número interior"
              id="address2"
              autoComplete="street-address"
              className="mb-4 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={address2}
              onChange={handleAddress2Change}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="reference" className=" text-sm font-medium text-gray-700">
            Referencia
          </label>
          <div className="mt-4">
            <input
              type="text"
              name="reference"
              placeholder="Cerca de la autopista"
              id="reference"
              className="mb-4 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={reference}
              onChange={handleReferenceChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="province" className="block text-sm font-medium text-gray-700">
            Estado*
          </label>
          <div className="mt-4">
            <input
              required
              type="text"
              name="province"
              id="province"
              placeholder="Querétaro"
              value={province}
              autoComplete="address-level1"
              className="mb-4 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleProvinceChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Ciudad*
          </label>
          <div className="mt-4">
            <input
              type="text"
              name="city"
              placeholder="Santiago de Querétaro"
              id="city"
              autoComplete="address-level2"
              className="mb-4 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={city}
              onChange={handleCityChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
            Código Postal*
          </label>
          <div className="mt-4">
            <input
              required
              type="text"
              name="zip"
              placeholder="76200"
              id="zip"
              autoComplete="postal-code"
              value={zip}
              className="mb-4 p-2 w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleZipChange}
            />
          </div>
        </div>
        <Button title="Proceder al pago" type="submit" variant="cta" className={'mt-4 mb-8 justify-self-center w-2/3'} />
      </form>

      {showRetroModal && (
        <Modal showModal={showRetroModal} toggleModal={setShowRetroModal} title="">
          <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
            {success && <BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />}
            {!success && <ExclamationIcon className="items-center h-32 w-32 text-red-500 mb-6" />}
            <p className="text-2xl text-center mb-4">{message}</p>
          </div>
        </Modal>
      )}
    </>
  );
}
