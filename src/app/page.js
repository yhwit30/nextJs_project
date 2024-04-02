'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Box, AppBar, Toolbar } from '@mui/material';
import theme from './theme';
import { DiAtom } from 'react-icons/di';
import { AiFillCustomerService } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <div>main page</div>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar>
            <div className="tw-flex-1">
              <FaBars className="tw-cursor-pointer" />
            </div>
            <div className="logo-box">
              <a href="/" className="tw-font-bold">
                NOTE!
              </a>
            </div>
            <div className="tw-flex-1 tw-flex tw-justify-end">
              <a href="/write">글쓰기</a>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <section className="tw-h-screen tw-flex tw-items-center tw-justify-center tw-text-[5rem]">
          section
        </section>
      </ThemeProvider>
      <DiAtom size={300} />
      <AiFillCustomerService size={200} />
    </>
  );
}
