// react 모듈에서 { useState }를 불러오고 useState()를 선언해서 사용하면 된다.
// useState의 변수값이 바뀌면 컴포넌트가 새롭게 렌더링 된다.
/*
const [state, setState] = useState(initialState);
const [ 데이터, 데이터변경함수 ] = useState(초기값(생략가능));
*/

import React, { useState } from 'react';

const Count = () => {
    const [ cnt, setCnt ] = useState(0);
    const updateCnt = () => setCnt(cnt + 1);
    const clearCnt = () => setCnt(0);

    return (
        <div>
            클릭한 획수는 {cnt}번 입니다.
            <div>
                <button onClick={updateCnt}> 클릭! </button>
                <button onClick={clearCnt}> 초기화! </button>
            </div>
        </div>
    );
};

export default Count;