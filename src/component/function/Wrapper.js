/*
// 1. props.children 사용하여 내부에 있는 내용을 표현.

import React from 'react';
import Main from './Main';

function Wrapper(props) {
    const style = {
        backgroundColor: 'yellow',
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}
*/
/*
// 2. 비구조화 할당 문법 사용하여 내부에 있는 내용을 표현

import React from 'react';

function Wrapper({children}) {
    const style = {
        backgroundColor: 'yellow',
    };

    return (
        <div style={style}>
            {children}
        </div>
    );
}
*/

// 3. 반대로 하나의 자식만 요구 할 수도 있음.(propTypes 활용)
import React from 'react';
import PropTypes from "prop-types";

function Wrapper(props) {
    const style = {
        backgroundColor: 'yellow',
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.element.isRequired
};

export default Wrapper;