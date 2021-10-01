import { Card } from '@frappe/common/design-system';
import { Button } from '@frappe/common/design-system';
import classes from './AddCategory.module.scss'

import { useState } from 'react';
import axios from "axios";
const CreateCategory = props => {
    const [categoryName, setCategoryName] = useState('')


    const addCategoryHandler = (event) => {
      event.preventDefault();
      if(categoryName=="") return;
      
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories/`, {
        name: categoryName
      })


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
             <Button type="submit" onClick={addCategoryHandler} title="Add Category"></Button>
          </form>
      </Card>
    );
};

export default CreateCategory;