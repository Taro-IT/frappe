export function CheckoutForm() {

  return (
  <div className="bg-gray-100">
    <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-sele-center">
      <h2 className="sr-only">Checkout</h2>

      <form className="lg:gap-x-12 xl:gap-x-16">
        <div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Información de contacto</h2>
            
            <div className="mt-4">
              <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
                Nombre del recipiente*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  id="clientName"
                  name="clientName"
                  autoComplete="given-name"
                  className="w-1/4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="w-1/4  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className=" w-1/4  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className=" w-1/4  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className=" w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className=" w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="w-1/4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  País*
                </label>
                <div className="mt-1">
                  <select
                    required
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="w-1/4 text-center border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Mexico</option>
                  </select>
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
                    autoComplete="address-level1"
                    className="w-1/4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="w-1/4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}