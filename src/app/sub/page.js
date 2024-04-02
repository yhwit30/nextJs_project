'use client';

import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  MenuIconButton,
  MenuIcon,
} from '@mui/material';

export default function Sub() {
  return (
    <>
      <div>sub page</div>
      <Button className="tw-m-10" size="small" href="../" color="secondary" variant="outlined">
        to main page!
      </Button>
    </>
  );
}
