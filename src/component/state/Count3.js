// useState를 호출하여 변환된 업데이트 함수는 setState와 유사하게 사용 가능.
// 호출한 컴포넌트별로 상태관리가 가능.
import React, { useState } from 'react';

const Count3 = () => {
    const [ cnt, setCnt ] = useState(0);

    return (
        <div>
            클릭한 회수는 {cnt}번
            <div>
                <button onClick={() => setCnt(prevCnt => prevCnt + 1)}> 클릭! </button>
                <button onClick={() => setCnt(0)}> 초기화! </button>
            </div>
        </div>
    );
};

export default Count3;