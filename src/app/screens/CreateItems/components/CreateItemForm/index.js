import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, InputLabel } from '@material-ui/core';

import { useDispatch, useSelector } from '../../../../contexts/ItemsContext';
import FORM_FIELDS from './constants';

import styles from './styles.module.scss';

function CreateItemForm() {
  const { register, handleSubmit, errors, reset, control } = useForm();
  const itemsDispatch = useDispatch();
  const itemsCodes = useSelector(state => state.items.map(item => item.code));

  const handleFormSubmit = values => {
    itemsDispatch({ type: 'createItem', payload: { ...values } });
    reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      {FORM_FIELDS.map(({ name, label, component: Input, validations, ...fieldProps }) => {
        const inputRef = validations ? register(validations) : register;
        return (
          <div key={name} className={styles['input-container']}>
            <InputLabel className={styles['input-label']}>{label}:</InputLabel>
            <Input
              name={name}
              className={styles.input}
              inputRef={inputRef}
              helperText={errors[name]?.message}
              options={itemsCodes}
              control={control}
              size="small"
              {...fieldProps}
            />
          </div>
        );
      })}
      <Button className={styles.submit} type="submit">
        Create Item
      </Button>
    </form>
  );
}

export default CreateItemForm;
