import { Checkbox, FormControlLabel, OutlinedInput, Radio, RadioGroup } from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Component } from '../utils/types';
import { LabeledFormInput } from './inputs';

export const FormElement = (component: Component, register: UseFormRegister<FieldValues>) => {
  const { id, fieldName, type, options } = component;
  switch (type) {
    case 'input':
      return (
        <LabeledFormInput key={`${id}-${fieldName}`} label={fieldName} id={id}>
          <OutlinedInput type="text" id={id} {...register(fieldName)} />
        </LabeledFormInput>
      );
    case 'dateflied':
      return (
        <LabeledFormInput key={`${id}-${fieldName}`} label={fieldName} id={id}>
          <OutlinedInput type="date" id={id} {...register(fieldName)} />
        </LabeledFormInput>
      );
    case 'checkbox':
      return (
        <FormControlLabel
          key={`${id}-${fieldName}`}
          id={id}
          control={<Checkbox />}
          label={fieldName}
          {...register(fieldName)}
        />
      );
    case 'textarea':
      return (
        <LabeledFormInput key={`${id}-${fieldName}`} id={id} label={fieldName}>
          <OutlinedInput type="text" id={id} minRows={3} multiline {...register(fieldName)} />
        </LabeledFormInput>
      );
    case 'radio':
      return (
        <LabeledFormInput key={`${id}-${fieldName}`} id={id} label={fieldName}>
          <RadioGroup id={id}>
            {options?.map((o) => (
              <FormControlLabel
                key={o}
                value={o}
                control={<Radio />}
                label={o}
                {...register(fieldName)}
              />
            ))}
          </RadioGroup>
        </LabeledFormInput>
      );
    case 'numberfield':
      return (
        <LabeledFormInput key={`${id}-${fieldName}`} id={id} label={fieldName}>
          <OutlinedInput type="number" {...register(fieldName)} />
        </LabeledFormInput>
      );
    default:
      return null;
  }
};
