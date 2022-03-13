/* eslint-disable no-unused-vars */
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useCallback } from 'react';
import { WindowContent } from '../../../App.styles';

export const Editor = ({ code, setCode }: { code?: string; setCode: (val: string) => void }) => {
  const handleCodeChange = useCallback((e: any) => setCode(e.target.value), [setCode]);
  return (
    <WindowContent>
      <CodeEditor
        value={code}
        language="json"
        placeholder="Please enter JSON code."
        onChange={handleCodeChange}
        padding={15}
        style={{
          fontSize: 12,
          height: '100%',
          overflow: 'scroll',
          backgroundColor: '#f5f5f5',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
        }}
      />
    </WindowContent>
  );
}
