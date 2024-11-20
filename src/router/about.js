import React, { PureComponent } from 'react';
import WidthRouter from '../../src/utils/with_router';

class about extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { router } = this.props
        return (
            <div>
                about
                <div>{router.params.id}</div>
            </div>
        );
    }
}


export default WidthRouter(about);