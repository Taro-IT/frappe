import { XIcon } from '@heroicons/react/solid';
import React, { PropsWithChildren } from 'react';
import { Card } from '@frappe/common/design-system';

type ModalProps = {
  showModal: boolean;
  toggleModal: (nv: boolean) => any;
};
export const Modal = ({ showModal, toggleModal, children, ...props }: PropsWithChildren<ModalProps>) => {
  return (
    <div
      className={
        showModal
          ? 'bg-gray-500 bg-opacity-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none'
          : 'hidden'
      }
      style={{ zIndex: 100 }}
      onClick={toggleModal(false)}
    >
      <Card className="flex flex-col xl:w-1/4 lg:w-1/3 md:w-5/12 w-2/3 rounded-t-xl" rounded={false}>
        <div className="flex flex-row w-full mb-6">
          <XIcon
            onClick={() => toggleModal(false)}
            className="ml-auto mr-0 my-auto h-8 w-8 text-gray-800 hover:text-gray-700 cursor-pointer"
          />
        </div>
        {children}
      </Card>
    </div>
  );
};
