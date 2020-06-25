import React from 'react';
import { string, func, any, arrayOf, shape, oneOfType } from 'prop-types';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';

import styles from './styles.module.scss';

function TypeRadioGroup({ className, inputClassName, name, options, inputRef, defaultValue }) {
  return (
    <FormControl className={className} component="fieldset">
      <RadioGroup className={inputClassName} name={name} onChange={() => null} defaultValue={defaultValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={label}
            value={value}
            control={<Radio className={styles.radio} />}
            label={label}
            inputRef={inputRef}
          />
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
  defaultValue: string.isRequired,
};

TypeRadioGroup.defaultProps = {
  className: '',
  inputClassName: '',
  name: '',
};

export default TypeRadioGroup;
