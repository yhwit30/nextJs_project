'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Box, AppBar, Toolbar } from '@mui/material';
import theme from './theme';
import { DiAtom } from 'react-icons/di';
import { AiFillCustomerService } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';

export default function App() {
  return (
    <>
      <div>main page</div>

      <Button variant="contained" onClick={() => confirm('really?')}>
        delete
        <RiDeleteBin6Fill />
      </Button>

      <ThemeProvider theme={theme}>
        <Button className="tw-m-10" variant="contained" href="sub/">
          to sub page
        </Button>
      </ThemeProvider>

      <DiAtom className="tw-w-10 tw-h-10" />
      <AiFillCustomerService className="tw-w-10 tw-h-10" />
    </>
  );
}
