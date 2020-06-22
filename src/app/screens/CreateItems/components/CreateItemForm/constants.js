import { TextField } from '@material-ui/core';

import TypeRadioGroup from '../TypeRadioGroup';

const FORM_FIELDS = [
  { name: "code", label: "Code", component: TextField, variant: "outlined", validations:
    { required: "Required", maxLength: { value: 14, message: "Up to 14 characters" } }
  },
  { name: "description", label: "Description", component: TextField, variant: "outlined", validations:
    { required: "Required" }
  },
  { name: "price", label: "Price", component: TextField, variant: "outlined", type: "number", validations: { min: 0 } },
  { name: "type", label: "Type", component: TypeRadioGroup, options: [{ value: "single", label: "Single" }, { value: "multiple", label: "Multiple" }], variant: "outlined" },
  { name: "order", label: "Order", component: TextField, variant: "outlined", type: "number", validations: { min: 0 }},
]

export { FORM_FIELDS };