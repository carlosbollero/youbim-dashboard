import React from 'react';
import { string, func, any, arrayOf, oneOfType, shape } from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import { Controller } from 'react-hook-form';

function ParentSelect({ className, name, options, inputRef, variant, control }) {
  return (
    <Controller
      as={Select}
      control={control}
      inputRef={inputRef}
      className={className}
      name={name}
      disabled={options.length < 1}
      variant={variant}
      defaultValue=""
    >
      <MenuItem value="">None</MenuItem>
      {options.map(code => (
        <MenuItem key={code} value={code}>
          {code}
        </MenuItem>
      ))}
    </Controller>
  );
}

ParentSelect.propTypes = {
  className: string,
  name: string.isRequired,
  options: arrayOf(any),
  inputRef: oneOfType([func, shape({ current: any })]).isRequired,
  variant: string.isRequired,
  control: shape({}).isRequired,
};

ParentSelect.defaultProps = {
  className: '',
  options: [],
};

export default ParentSelect;
