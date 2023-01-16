// 객체(object)도 상태변수(State Value)로 사용 가능하다.
import React, { useState } from 'react';

const Count2 = () => {
    const [ state, setState ] = useState({cnt : 0})
    const updateCnt = val =>
    setState({
        ...state,
        [val] : state[val] + 1
    })
    const { cnt } = state

    return (
        <div>
            클릭한 횟수는 {cnt}번
            <div>
                <button onClick={updateCnt.bind(null, 'cnt')}> 클릭! </button>
            </div>
        </div>
    );
};

export default Count2;