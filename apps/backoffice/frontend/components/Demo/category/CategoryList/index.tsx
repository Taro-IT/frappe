import classes from './CategoryList.module.scss';
import { Button, Card, Modal, SpanError} from '@frappe/common/design-system';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx'

type category = {
    readonly id: string,
    readonly name: string
}

const CategoryList = props => {
    const [categories, setCategories] = useState([])
    const [displayEditModal, setEditModal] = useState<boolean>(false)
    const [currentCategory, setCurrentCategory] = useState<category>()
    const [newName, setNewName] = useState<string>("")
    const [nameErrors, setNameErrors] = useState<boolean>(false)

    // TODO: centralize to state management -> refactor to custom hook
    useEffect(() => {
        const getCategories = async (): Promise<void> => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
            const data = response.data.result
            if (data.length !== 0) {
                setCategories(data);
            }
        }
        getCategories()

    }, [])

    const updateCategory = async (id:string, name: string) => {
        if(name === "" || name === currentCategory.name) {
            setNameErrors(true)
            return
        }
        try {
            await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {
            name: name
            })
        } catch (error) {
            console.error("La categoría ya existe.", error);
        }
        setEditModal(false)
        setNameErrors(false)
        return
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const editCategory = (id:string, name:string) => {
        setEditModal(true)
        setCurrentCategory({id, name})
        setNameErrors(false)
    }
    const SaveChangesButton = (props) => {
        const saveChanges = () => {
            updateCategory(props.id, props.name)
        }
        return (
            <Button title="Guardar cambios" onClick={saveChanges} variant="cta" className={"mt-4"} />
        )
    }
    const EditButton = (props) => {
        const edit = () => {
            editCategory(props.id, props.name)
        }
        return (
            <Button title="Editar" className="ml-2 w-24" variant="cta" onClick={edit}/>
        )
    }

    const useCategories = useMemo(() => categories.map((category, index) => {
        return (
            <>
                <Card className={clsx(classes.categories, "text-center", "p-4")} key={index}>
                    <h1 className={clsx("text-2xl")}>{category.name}</h1>
                    <p className={clsx("text-lg", "mb-12")}>Productos en esta categoría: 4</p>
                    <Button title="Eliminar" className="mr-2 w-24" variant="cta" onClick={()=>{ console.log("Method not implemented yet.");
                    }}/>
                    <EditButton id={category.id} name={category.name} />
                </Card>

            </>
        )
    }), [categories])


    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 m-12 overflow-y-scroll">
            {useCategories.length ? useCategories : "No tienes categorías registradas."}
            {displayEditModal &&
                    <Modal title={`Editar categoría - ${currentCategory.name}`} showModal={displayEditModal} toggleModal={setEditModal} >
                        <form className="flex flex-col w-full px-20 mb-4 py-2">
                            <label className="text-base w-full my-1">Nuevo nombre</label>
                            <input className="border-2 border-gray-500 rounded w-full placeholder-gray-500" placeholder={currentCategory.name} onChange={handleNameChange} type="name" name="categoryName" />
                            {nameErrors && <SpanError message="El nombre no puede ser vacío ni igual al anterior"/>}
                            <SaveChangesButton id={currentCategory.id} name={newName}/>
                        </form>
                    </Modal>
            }
        </div>
    )
};

export default CategoryList;
