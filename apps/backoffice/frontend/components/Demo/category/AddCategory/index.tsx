import {Card, Form, TextField} from '@frappe/common/design-system';
import { Button } from '@frappe/common/design-system';
import classes from './AddCategory.module.scss'

import React, { useState } from 'react';
import axios from "axios";
import {wrapError} from "@frappe/common/utils";
const CreateCategory = () => {
  const addCategoryHandler = async (data: { 'category-name': string }) => {
    const [error] = await wrapError(axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { name: data["category-name"] }));

    if (error !== null) {
      throw error;
    }
  }

  return (
    <Card className={classes.input}>
      <Form onSubmit={ addCategoryHandler } >
        <TextField name="category-name" label="Nombre de la categoría" validations={{ required: 'La categoria es requerida' }} />

        <Button variant="cta" type="submit"  title="Agregar" />
      </Form>
    </Card>
  );
};

export default CreateCategory;
