import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/'

export default () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h3" color="inherit">
                h3. Heading
      </Typography>
        </Toolbar>
    </AppBar>
)