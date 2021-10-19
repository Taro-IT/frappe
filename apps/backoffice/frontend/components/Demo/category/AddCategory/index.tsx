import { Card } from '@frappe/common/design-system';
import { Button } from '@frappe/common/design-system';
import classes from './AddCategory.module.scss';
import { useState } from 'react';
import axios from 'axios';

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState('');

  const addCategoryHandler = async event => {
    event.preventDefault();
    if (categoryName == '') return;
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories/`, {
        name: categoryName
      });
    } catch (error) {
      console.error('La categoría ya existe.');
    }

    setCategoryName('');
  };

  const nameChangeHandler = event => {
    setCategoryName(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="categoryName">Nombre de la categoría</label>
        <input id="categoryName" type="text" value={categoryName} onChange={nameChangeHandler}></input>
        <Button variant="cta" type="submit" onClick={addCategoryHandler} title="Agregar"></Button>
      </form>
    </Card>
  );
};

export default CreateCategory;
