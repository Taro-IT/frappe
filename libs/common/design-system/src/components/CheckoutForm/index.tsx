//User story: frappe-981
import { Button, Modal } from '@frappe/common/design-system';
import React, { FormEvent, useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import styles from './CheckoutForm.module.scss';

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
  const [country, setCountry] = useState<string>();
  const [zip, setZip] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false)
  const [showRetroModal, setShowRetroModal] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>();
  const [message, setMessage] = useState<string>()
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (loading === true) {return}
    setLoading(true)
    storeDataInLocalStorage();
    generateOrder();
  }

  const generateOrder = async () => {

    const items = JSON.parse(localStorage.getItem('items'))
    items.map( (item :any)  => {
      item.quantity = parseInt(item.quantity, 10)
      //item.productImages = JSON.parse(item.productImages)
    })

    const orderData = {
      items: items,
      subtotal: parseFloat(localStorage.getItem('subtotal')),
      total: parseFloat(localStorage.getItem('total')),
      clientName: localStorage.getItem('clientName'),
      address: JSON.parse(localStorage.getItem('address'))
    }
    console.log(orderData)

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders/`, {
        items: items,
        subtotal: parseFloat(localStorage.getItem('subtotal')),
        total: parseFloat(localStorage.getItem('total')),
        clientName: localStorage.getItem('clientName'),
        address: JSON.parse(localStorage.getItem('address'))
      });
      showModalSuccess();
      return
    } catch(error) {
      console.log(error);
      showModalError();
      return
    }
  }

  const storeDataInLocalStorage =() => {
    console.log(country)
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
    }

    localStorage.setItem('clientName', clientName )
    localStorage.setItem('address', JSON.stringify(address))

    console.log(JSON.parse(localStorage.getItem('items')))
    console.log(localStorage.getItem('clientName'))
    console.log(JSON.parse(localStorage.getItem('address')))
  }
  
  const showModalSuccess = () => {
    setShowRetroModal(true)
    setSuccess(true)
    setMessage("Tu orden fue creada con éxito.")
    setLoading(false)
  }

  const showModalError = () => {
    setShowRetroModal(true)
    setSuccess(false)
    setMessage("No se pudo crear tu orden.")
    console.error("No se pudo crear tu orden.");
    setLoading(false)
  }
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  }

  const handleAddress1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(e.target.value);
  }

  const handleAddress2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value);
  }

  const handleReferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReference(e.target.value);
  }
  
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }

  const handleProvinceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvince(e.target.value);
  }

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
  }

  const handleCountryChange = (selected : any) => {
    setCountry(selected.value);
  };

  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(163, 142, 101)' : undefined,
      color: state.isSelected ? 'rgb(163, 142, 101)' : undefined
    })
  };

  const options = [{value: 'México' , label: "México"}]
  
  return (
  <div className="bg-gray-100">
    <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-sele-center">
      <h2 className="sr-only">Checkout</h2>

      <form className="lg:gap-x-12 xl:gap-x-16" onSubmit={handleSubmit}>
        <div>
          <div>
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
                  name="clientName"
                  autoComplete="given-name"
                  className= "w-1/4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="w-1/4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={handleEmailChange}
                  />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Número telefónico*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className=" w-1/4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-10">
            <h2 className="text-lg font-medium text-gray-900">Información de envío</h2>

              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Compañía
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className=" w-1/4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={company}
                    onChange={handleCompanyChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
                  Dirección de envío principal*
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="address1"
                    id="address1"
                    autoComplete="street-address"
                    className=" w-1/2  border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={address1}
                    onChange={handleAddress1Change}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
                  Dirección de envío secundaria
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="address2"
                    id="address2"
                    autoComplete="street-address"
                    className=" w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={address2}
                    onChange={handleAddress2Change}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="reference" className=" text-sm font-medium text-gray-700">
                  Referencia
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="reference"
                    id="reference"
                    className="w-1/2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={reference}
                    onChange={handleReferenceChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Ciudad*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="w-1/4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={city}
                    onChange={handleCityChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  País*
                </label>
                <div className="mt-1">
                  <Select
                    name="country"
                    options={options}
                    className="rounded-md w-1/4 h-3/4"
                    classNamePrefix="Selecciona tu país"
                    onChange={handleCountryChange}
                    placeholder="Selecciona tu país"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                  Estado*
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="province"
                    id="province"
                    value={province}
                    autoComplete="address-level1"
                    className="w-1/4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleProvinceChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                  Código Postal*
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="zip"
                    id="zip"
                    autoComplete="postal-code"
                    value={zip}
                    className="w-1/4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleZipChange}
                  />
                </div>
              </div>
          </div>
        </div>
        <Button title="Ir a Pagar" type="submit" variant="cta" className={'mt-4 justify-self-center'} />
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
    </div>
  </div>
  )
}