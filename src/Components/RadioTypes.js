import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({methods,setradioType,children}) {
  const [value, setValue] = React.useState('');
    
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setradioType(value);
  }, [value]);

  return (
    <FormControl component="fieldset">
      {children?  <FormLabel component="span">{children}</FormLabel>: null}
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        {methods.map((type)=> {
            return (
                <FormControlLabel value={type} key={type} control={<Radio />} label={type} />
            );
        })}
      </RadioGroup>
    </FormControl>
  );
}
