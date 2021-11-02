import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'


interface PaginationProps{
    readonly total: number;
    readonly actualPage?: number;
    readonly itemsPerPage: number;
}


export const Pagination = ({total, actualPage = 1, itemsPerPage}:PaginationProps) => {


    return (
        <div>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>


        </div>
    )



}