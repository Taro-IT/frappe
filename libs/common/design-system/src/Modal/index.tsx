import { XIcon } from '@heroicons/react/solid';
import  { PropsWithChildren } from 'react';
import { Card } from '../index';

type ModalProps = {
  showModal: boolean;
  toggleModal: (nv: boolean) => any;
  title: string;
};
export const Modal = ({ showModal, toggleModal, title, children, ...props }: PropsWithChildren<ModalProps>) => {
  const handleClickOut = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      toggleModal(false)
    }
  }

  return (
    <div
      className={
        showModal
          ? 'bg-gray-500 bg-opacity-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none'
          : 'hidden'
      }
      onClick={handleClickOut}
    >
      <Card className="flex flex-col xl:w-2/6 lg:w-2/3 md:w-5/12 w-2/3 rounded-xl" rounded={false}>
        <div className="flex flex-row w-full mb-6">
          <div className="ml-4 mt-4 text-xl">{title}</div>
          <XIcon
            onClick={() => toggleModal(false)}
            className="ml-auto mr-4 mt-4 my-auto h-8 w-8 text-gray-400 hover:text-gray-500 cursor-pointer"
          />
        </div>
        
        {children}
      </Card>
    </div>
  );
};
