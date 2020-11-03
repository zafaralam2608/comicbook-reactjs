import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {Home} from '@material-ui/icons';

export class Header extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <IconButton edge='start' href='./'>
                        <Home color='inherit'/>
                    </IconButton>
                    <Typography align='center' variant='h4'>
                        Page Title
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
