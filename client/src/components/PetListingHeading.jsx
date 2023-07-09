import ButtonCSS from "../styles/Button.module.css";
import {
  UserCircleIcon,
  PhoneIcon,
  CakeIcon,
  MapPinIcon,
  FunnelIcon,
} from '@heroicons/react/20/solid'

export default function Example({product}) {
  return (
    <section className='py-4 px-4'>
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
      <h1 class="py-2 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-primaryBrown">Meet <mark class="px-2 text-lund bg-blue-600 rounded dark:bg-primaryBrown">{product.name}!</mark></h1>
      <section></section>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-primaryBrown">
            <FunnelIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-primaryBrown" aria-hidden="true" />
            {product.breed}
          </div>
          <div className="mt-2 flex items-center text-sm text-primaryBrown">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-primaryBrown" aria-hidden="true" />
            {product.vac ? ('Yes') : ('No') }
          </div>
          <div className="mt-2 flex items-center text-sm text-primaryBrown">
            <CakeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-primaryBrown" aria-hidden="true" />
            {product.age}
          </div>
          <div className="mt-2 flex items-center text-sm text-primaryBrown">
            <UserCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-primaryBrown" aria-hidden="true" />
            {product.cat}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">

        <span className="sm:ml-3">
          <button
            type="button"
            className={ButtonCSS.adoptButton}
          >
            <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Contact Owner
          </button>
        </span>
      </div>
    </div>
    </section>
  )
}
