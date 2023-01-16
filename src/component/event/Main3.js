// React에서는 false를 반환해도 기본동작을 방지 할 수 없음.
// 반드시 preventDefault를 명시적으로 호출해야 된다.

import React, { useState } from 'react';

const Main3 = () => {
    const [ myName, setMyName ] = useState("ParkJinA")

    function changeName(e) {
        e.preventDefault(); // 반드시 preventDefault를 명시적으로 호출
        setMyName(myName === "ParkJinA" ? "JINA" : "ParkJinA");
    }

    return (
        <div>
            <h1 className="kk"> Hello. {myName} </h1>
            <a href="alert(1);" onClick={changeName}> Change </a>
        </div>
    );
};

export default Main3;