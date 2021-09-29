import Card from '../../common/Card';
import Button from '../../common/Button';
import classes from './AddCategory.module.scss'

import { useState } from 'react';

const CreateCategory = props => {
    const [categoryName, setCategoryName] = useState('')


    const addCategoryHandler = (event) => {
      event.preventDefault();
      if(categoryName=="") return;
      props.onAddCategory(categoryName);
      
      setCategoryName('')
    }

    const nameChangeHandler = (event) => {
      setCategoryName(event.target.value)
    }


    return (
      <Card className={classes.input}>
          <form>
              <label htmlFor='categoryName'>Nombre de la categoría</label>
              <input
                  id='categoryName'
                  type='text'
                  value={categoryName}
                  onChange={nameChangeHandler}
              ></input>
             <Button type="submit" onClick={addCategoryHandler} title="Add User"></Button>
          </form>
      </Card>
    );
};

export default CreateCategory;