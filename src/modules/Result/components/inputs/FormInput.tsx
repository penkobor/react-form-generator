import { ReactNode } from 'react';
import { FormInputWrapper } from '../../styles/Result.styles';

export const LabeledFormInput = ({
  id,
  label,
  children
}: {
  id: string;
  label: string;
  children: ReactNode;
}) => {
  return (
    <FormInputWrapper key={id}>
      <label>{label}</label>
      {children}
    </FormInputWrapper>
  );
}
