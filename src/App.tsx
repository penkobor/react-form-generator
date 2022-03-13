import { useCallback, useState } from 'react';
import { EditorWindow, MainWindow, StyledTab, StyledTabs } from './App.styles';
import { TabPanel } from './components';
import { Description, Config, Result } from './modules';
import { INITIAL_CODE } from './utils';

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  };
}

function App() {
  const [tab, setTab] = useState(0);
  const [code, setCode] = useState<string>(INITIAL_CODE);

  const handleChange = useCallback((event: any, newValue: any) => {
    setTab(newValue);
  }, []);

  const handleSetCode = useCallback((code: string) => {
    setCode(code);
    setTab(1);
  }, []);

  return (
    <MainWindow>
      <EditorWindow>
        <StyledTabs value={tab} onChange={handleChange}>
          <StyledTab label="Editor" {...a11yProps(0)} />
          <StyledTab label="Result" disabled={!code} {...a11yProps(1)} />
        </StyledTabs>
        <TabPanel value={tab} index={0}>
          <Config code={code} setCode={handleSetCode} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Result code={code} />
        </TabPanel>
      </EditorWindow>
      <Description />
    </MainWindow>
  );
}

export default App;
