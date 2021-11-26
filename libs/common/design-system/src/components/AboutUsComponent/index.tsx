/* This example requires Tailwind CSS v2.0+ */

export function AboutUsComponent() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-2xl tracking-tight font-extrabold text-yellow-600 sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
              <span className="block xl:inline">ZAPATOS CON ALMA</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
             Cínica somos una marca de moda mexicana. Diseñamos y manufacturamos calzado fino y disruptivo.
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
             Detrás cada producto, está el hermoso trabajo de artesanos de la tercera edad, quienes elaboran el calzado completamente a mano, utilizando técnicas ancestrales.
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                La razón de Cínica, es ir en “contra del sistema de la moda”, enfocándonos en la moda ética. Utilizamos pieles, casi en su totalidad, reutilizadas, creando piezas únicas en su singular al ser material limitado. Además, todo es hecho sobre pedido para reducir el desperdicio.
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Agradecemos tu confianza al adquirir nuestros productos y sumarte al movimiento de moda ética.
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="../img/donIsidro.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}