import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';

import { FORM_FIELDS } from './constants';

import styles from './styles.module.scss';

function CreateItemForm() {
  const { register, handleSubmit, errors } = useForm();
  const handleFormSubmit = values => {
    console.log('Values:', values);
  };
  console.log('Errors', errors);
  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      {FORM_FIELDS.map(({ name, component: Input, validations, ...fieldProps }) => (
        <Input
          key={name}
          name={name}
          className={styles.input}
          inputRef={validations ? register(validations) : register}
          helperText={errors[name]?.message}
          {...fieldProps}
        />
      ))}

      <Button className={styles.submit} type="submit">Create Item</Button>
    </form>
  )
}

export default CreateItemForm;