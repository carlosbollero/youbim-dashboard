import React from 'react';
import { string, func, any, arrayOf, shape, oneOfType } from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function TypeRadioGroup({ className, inputClassName, name, options, inputRef }) {
  return (
    <FormControl className={className} component="fieldset">
      <FormLabel component="legend">Type</FormLabel>
      <RadioGroup className={inputClassName} name={name} onChange={() => null}>
        {options.map(({ value, label }) => (
          <FormControlLabel key={label} value={value} control={<Radio />} label={label} inputRef={inputRef} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

TypeRadioGroup.propTypes = {
  className: string,
  inputClassName: string,
  name: string,
  options: arrayOf(shape({ value: string, label: string })).isRequired,
  inputRef: oneOfType([func, shape({ current: any })]).isRequired,
};

TypeRadioGroup.defaultProps = {
  className: '',
  inputClassName: '',
  name: '',
};

export default TypeRadioGroup;
