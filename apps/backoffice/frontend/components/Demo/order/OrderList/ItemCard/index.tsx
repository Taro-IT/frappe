//User Story: frappe-91
//User Story: frappe-85
import clsx from 'clsx';

type ItemCardProps = {
  readonly item;
  readonly id;
  readonly imgSrc;
};

const ItemCard = ({ item, id, imgSrc }: ItemCardProps) => {
  // TODO make dynamic images and PDFs
  return (
    <div className="p-4" >
      <div className="flex flex-row">
        <p className="mr-12 text-xl" key={id}>
          {' '}
          {item.productName}{' '}
        </p>
        <p className="text-gray-500 mr-12 text-lg">${item.productPrice}</p>
        <p className="mr-2 tex t-lg">{`Cantidad: ${item.quantity}`} </p>
      </div>
      <img className="my-6 rounded-xl" src={imgSrc} alt="foto del producto" width="200rem" />
      <hr className={clsx('mb-2')} />
    </div>
  );
};

export default ItemCard;
