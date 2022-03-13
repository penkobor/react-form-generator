import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FormInputWrapper } from '../../styles/Result.styles';

function RadioInput({
  id,
  name,
  options,
  ...rest
}: {
  id: string;
  name: string;
  options?: string[];
}) {
  return (
    <FormInputWrapper key={id}>
      <label>{name}</label>
      <RadioGroup id={id} name="radio-buttons-group" {...rest}>
        {options?.map((o) => (
          <FormControlLabel key={o} value={o} control={<Radio />} label={o} />
        ))}
      </RadioGroup>
    </FormInputWrapper>
  );
}

export default RadioInput;
