import React from 'react';
import {Header} from './common/Header';

export class Application extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return(
            <div>
                <Header/>
            </div>
        );
    }
}
