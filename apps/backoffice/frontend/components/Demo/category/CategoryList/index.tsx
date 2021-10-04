import classes from './CategoryList.module.scss';
import { Button, Card } from '@frappe/common/design-system';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx'

const CategoryList = props => {
    const [categories, setCategories] = useState([])

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

    
    const useCategories = useMemo(() => categories.map((category, index) => {
        return (
            <Card className={clsx(classes.categories, "text-center", "p-4")} key={index}>
                <h1 className={clsx("text-2xl")}>{category.name}</h1>
                <p className={clsx("text-lg", "mb-12")}>Productos en esta categoría: 4</p>
                <Button title="Eliminar" onClick={()=>{ console.log("Method not implemented yet.");
                }}/>
            </Card>
        )
    }), [categories])
    
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 m-12">
            {useCategories.length ? useCategories : "No tienes categorías registradas."}
        </div>
    )
};

export default CategoryList;