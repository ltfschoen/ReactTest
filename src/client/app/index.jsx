import React from 'react';
import {render} from 'react-dom';

import LikeComponent from './LikeComponent.jsx';

import '../styles/main.css'

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hello React!</p>
                <LikeComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));