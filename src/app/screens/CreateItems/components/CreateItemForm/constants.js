import { TextField } from '@material-ui/core';

import TypeRadioGroup from '../TypeRadioGroup';
import ParentSelect from '../ParentSelect';

import styles from './styles.module.scss';

const FORM_FIELDS = [
  {
    name: 'code',
    label: 'Code',
    component: TextField,
    variant: 'outlined',
    validations: { required: 'Required', maxLength: { value: 14, message: 'Up to 14 characters' } },
  },
  {
    name: 'description',
    label: 'Description',
    component: TextField,
    variant: 'outlined',
    validations: { required: 'Required' },
  },
  {
    name: 'price',
    label: 'Price',
    component: TextField,
    variant: 'outlined',
    type: 'number',
    validations: { min: { value: 0, message: 'Must be a positive number' } },
  },
  {
    name: 'type',
    label: 'Type',
    component: TypeRadioGroup,
    options: [
      { value: 'single', label: 'Single' },
      { value: 'multiple', label: 'Multiple' },
    ],
    variant: 'outlined',
    inputClassName: styles['radio-buttons'],
  },
  {
    name: 'order',
    label: 'Order',
    component: TextField,
    variant: 'outlined',
    type: 'number',
    validations: { min: { value: 0, message: 'Must be a positive number' } },
  },
  {
    name: 'parent',
    label: 'Parent',
    component: ParentSelect,
    type: 'select',
    variant: 'outlined',
  },
];

export default FORM_FIELDS;
