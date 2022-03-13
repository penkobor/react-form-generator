import CodeEditor from '@uiw/react-textarea-code-editor';
import { WindowContent } from '../../App.styles';
import { DESCRIPTION_CODE } from '../../utils';

export const Description = () => {
  return (
    <WindowContent>
      <h2>Specification Example: </h2>
      <CodeEditor
        value={DESCRIPTION_CODE}
        language="json"
        padding={15}
        style={{
          fontSize: 12,
          height: '100%',
          overflow: 'scroll',
          backgroundColor: '#f5f5f5',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
        }}
      />
      <ul>
        <li>
          {'Supported types: input (text), checkbox, numberfield, textarea, datefield, radio'}
        </li>
        <li>{'Format appliable for most of the form fileds: <FIELD_TYPE>: [ <FIELD_DESC> ]'}</li>
        <li>{'All examples of field specification can be found in Specification Example'}</li>
        <li>{'To specify form title add entry "title": <title>'}</li>
        <li>{'To specify actions add entry "actions": [ <action>, <action> ]'}</li>
        <li>{'Available actions: "submit", "reset"'}</li>
      </ul>
    </WindowContent>
  );
};
