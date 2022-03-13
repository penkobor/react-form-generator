import { Box } from '@mui/material';
import { ReactNode } from 'react';

function TabPanel(props: { value: number; index: number; children: ReactNode }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default TabPanel;
