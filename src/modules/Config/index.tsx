/* eslint-disable no-unused-vars */
import { Alert } from '@mui/material';
import { useCallback, useState } from 'react';
import { Card } from '../../components';
import { Editor } from './components';
import { ActionGroup, Button } from './styles';

const isValid = (code?: string) => {
  try {
    JSON.parse(code ?? '');
  } catch (e) {
    return false;
  }
  return true;
};

export const Config = ({ code, setCode }: { code?: string; setCode: (val: string) => void }) => {
  const [codePreview, setCodePreview] = useState(code);

  const handleApply = useCallback(() => setCode(codePreview ?? ''), [codePreview, setCode]);

  return (
    <Card>
      <Editor code={codePreview} setCode={setCodePreview} />
      {codePreview && !isValid(codePreview) && (
        <Alert severity="error" sx={{ ml: '20px', mr: '20px' }}>
          Entered JSON is not valid
        </Alert>
      )}
      <ActionGroup>
        <Button disabled={!isValid(codePreview)} variant="outlined" onClick={handleApply}>
          Apply
        </Button>
      </ActionGroup>
    </Card>
  );
}
