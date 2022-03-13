import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '../../components';
import { ActionButtonsGroup, FormBox } from './styles/Result.styles';
import { buildForm, capitaliseActionValues, getComponentsFrom } from './utils/helpers';

function Result({ code }: { code?: string }) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));
  const handleReset = useCallback(() => {
    reset();
  }, []);

  if (!code) return null;

  const parsedCode = JSON.parse(code ?? '');
  const components = getComponentsFrom(parsedCode);
  const formElements = buildForm(components, register);

  const hasActions = Array.isArray(parsedCode?.actions);

  if (hasActions) capitaliseActionValues(parsedCode);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBox>
          {parsedCode?.title && <h2>{parsedCode?.title}</h2>}
          {formElements}
          <ActionButtonsGroup>
            {hasActions && parsedCode.actions.includes('RESET') && (
              <Button variant="outlined" onClick={handleReset}>
                {'Reset'}
              </Button>
            )}
            {hasActions && parsedCode.actions.includes('SUBMIT') && (
              <Button variant="outlined" onClick={handleSubmit(onSubmit)}>
                {'Submit'}
              </Button>
            )}
          </ActionButtonsGroup>
        </FormBox>
      </form>
    </Card>
  );
}

export default Result;
