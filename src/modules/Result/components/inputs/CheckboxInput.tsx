import { ReactNode } from 'react';
import { FormCheckboxWrapper } from '../../styles/Result.styles';

function LabeledCheckboxInput({
  id,
  name,
  children
}: {
  id: string;
  name: string;
  children: ReactNode;
}) {
  return (
    <FormCheckboxWrapper key={id}>
      {children}
      <label>{name}</label>
    </FormCheckboxWrapper>
  );
}

export default LabeledCheckboxInput;
