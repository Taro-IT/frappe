import classes from './CategoryList.module.scss';
import { Button, Card, Modal, SpanError } from '@frappe/common/design-system';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

type category = {
  readonly id: string;
  readonly name: string;
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [displayEditModal, setEditModal] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<category>();
  const [newName, setNewName] = useState<string>('');
  const [nameErrors, setNameErrors] = useState<boolean>(false);
  const [displayDeleteModal, setDeleteModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [displayResultModal, setDisplayResultModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>();

  // TODO: centralize to state management -> refactor to custom hook
  useEffect(() => {
    const getCategories = async (): Promise<void> => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
      const data = response.data.result;
      if (data.length !== 0) {
        setCategories(data);
      }
    };
    getCategories();
  }, []);

  const updateCategory = async (id: string, name: string) => {
    if (name === '' || name === currentCategory.name) {
      setNameErrors(true);
      return;
    }
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {
        name: name
      });
      setMessage('La categoría se editó con éxito.');
      setSuccess(true);
    } catch (error) {
      console.error('La categoría ya existe.', error);
      setMessage('La categoría no se pudo editar');
      setSuccess(false);
    }
    setEditModal(false);
    setNameErrors(false);
    return;
  };
  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const SaveChangesButton = props => {
    const saveChanges = () => {
      updateCategory(props.id, props.name);
    };
    return <Button title="Guardar cambios" onClick={saveChanges} variant="cta" className={'mt-4'} />;
  };
  type buttonprops = { id: string; name?: string };
  const ConfirmDeleteCategory = ({ id }: buttonprops) => {
    const confirmDelete = async () => {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
        setMessage('Categoría borrada con éxito.');
        setSuccess(true);
      } catch (error) {
        console.error('La categoría no se pudo borrar', error);
        setMessage('La categoría no se pudo borrar.');
        setSuccess(false);
      }
      setDeleteModal(false);
      setDisplayResultModal(true);
      return;
    };
    return <Button title="Eliminar" onClick={confirmDelete} variant="cta" className={'mt-4'} />;
  };
  const EditButton = ({ id, name }: buttonprops) => {
    const edit = () => {
      setEditModal(true);
      setCurrentCategory({ id, name });
      setNameErrors(false);
    };
    return <Button title="Editar" className="ml-2 w-24" variant="cta" onClick={edit} />;
  };
  const DeleteButton = ({ id, name }: buttonprops) => {
    const deleteCategory = () => {
      setDeleteModal(true);
      setCurrentCategory({ id, name });
    };
    return <Button title="Eliminar" className="ml-2 w-24" variant="cta" onClick={deleteCategory} />;
  };

  const useCategories = useMemo(
    () =>
      categories.map((category, index) => {
        const { id, name } = category;
        if(category.isActive !== false){
          return (
            <>
              <Card className={clsx(classes.categories, 'text-center', 'p-4')} key={index}>
                <h1 className={clsx('text-2xl')}>{category.name}</h1>
                <p className={clsx('text-lg', 'mb-12')}>Productos en esta categoría: 4</p>
                <EditButton id={id} name={name} />
                <DeleteButton id={id} name={name} />
              </Card>
            </>
          );
        };
      }),
    [categories]
  );

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 m-12 overflow-y-scroll">
      {useCategories.length ? useCategories : 'No tienes categorías registradas.'}
      {displayEditModal && (
        <Modal
          title={`Editar categoría - ${currentCategory.name}`}
          showModal={displayEditModal}
          toggleModal={setEditModal}
        >
          <form className="flex flex-col w-full px-20 mb-4 py-2">
            <label className="text-base w-full my-1">Nuevo nombre</label>
            <input
              className="border-2 border-gray-500 rounded w-full placeholder-gray-500"
              placeholder={currentCategory.name}
              onChange={handleNameChange}
              type="name"
              name="categoryName"
            />
            {nameErrors && <SpanError message="El nombre no puede ser vacío ni igual al anterior" />}
            <SaveChangesButton id={currentCategory.id} name={newName} />
          </form>
        </Modal>
      )}
      {displayDeleteModal && (
        <Modal showModal={displayDeleteModal} toggleModal={setDeleteModal} title="Eliminar categoría">
          <div className="flex flex-col w-full px-20 mb-4 py-2 justify-center">
            <p className="text-2xl text-center mb-4">
              ¿Estás seguro de querer borrar la categoría {currentCategory.name}?
            </p>
            <p className="text-sm text-red-500 text-center">
              Esta acción es irreversible y afectará a los zapatos que son parte de esta categoría
            </p>
            <ConfirmDeleteCategory id={currentCategory.id} />
          </div>
        </Modal>
      )}
      {displayResultModal && (
        <Modal showModal={displayResultModal} toggleModal={setDisplayResultModal} title="">
          <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
            {success && <BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />}
            {!success && <ExclamationIcon className="items-center h-32 w-32 text-red-500 mb-6" />}
            <p className="text-2xl text-center mb-4">{message}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CategoryList;
