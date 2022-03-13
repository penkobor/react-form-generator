import { ReactNode } from 'react';
import { FormInputWrapper } from '../../styles/Result.styles';

function LabeledFormInput({
  id,
  label,
  children
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <FormInputWrapper key={id}>
      <label>{label}</label>
      {children}
    </FormInputWrapper>
  );
}

export default LabeledFormInput;
