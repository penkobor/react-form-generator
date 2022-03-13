import { Tab, Tabs } from '@mui/material';
import styled from 'styled-components';

export const MainWindow = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`;

export const StyledTab = styled(Tab)`
  && {
    border: 1px solid gray;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    margin-left: 5px;
  }
`;

export const EditorWindow = styled.div`
  flex: 1;
`;

export const StyledTabs = styled(Tabs)`
  && {
    margin-left: 20px;
  }
`;

export const WindowContent = styled.div`
  height: 400px;
  padding: 20px;
  flex: 1;
`;
