//User Story: frappe-91
import clsx from 'clsx';
import { Button } from '@frappe/common/design-system';

type ItemCardProps = {
  readonly item;
  readonly id;
  readonly onItemClick;
  readonly imgSrc;
};

const ItemCard = ({ item, id, onItemClick, imgSrc }: ItemCardProps) => {
  const handleClick = () => {
    onItemClick(item.pdfFile);
  };
  // TODO make dynamic images and PDFs
  return (
    <div className="p-4">
      <div className="flex flex-row">
        <p className="mr-12 text-xl" key={id}>
          {' '}
          {item.productName}{' '}
        </p>
        <p className="text-gray-500 mr-12 text-lg">${item.productPrice}</p>
        <p className="mr-2 tex t-lg">{`Cantidad: ${item.quantity}`} </p>
        <Button title={'Ver PDF'} variant={'cta'} className="flex ml-auto" onClick={handleClick} />
      </div>
      <img className="my-6 rounded-xl" src={imgSrc} alt="foto del producto" width="10%" />
      <hr className={clsx('mb-2')} />
    </div>
  );
};

export default ItemCard;
