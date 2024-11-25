// import React, { PureComponent } from 'react';
// class helloHook extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }

//     addConuter = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }


//     decrConuter = () => {
//         this.setState({
//             count: this.state.count + -1
//         })
//     }
//     render() {
//         const { count } = this.state
//         return (
//             <div>
//                 <h1>当前计数：{count}</h1>
//                 <button onClick={() => this.addConuter()}>+1</button>
//                 <button onClick={() => this.decrConuter()}>-1</button>
//             </div>
//         );
//     }
// }


// export default helloHook;


import React, { useState } from 'react';
import { memo } from "react";

const HelloHooks = (props) => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>当前计数：{counter}</h1>
            <h1>当前计数：{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={() => setCounter(counter + -1)}>-1</button>
        </div >
    );
}

export default memo(HelloHooks);
