// 함수를 직접 선언하여 사용 할 수도 있다.
import React, { useState } from 'react';

const Main2 = () => {
    const [ myName, setMyName ] = useState("ParkJinA")
    return (
        <div>
            <h1> Hello. {myName} </h1>
            <button onClick={() => {
                setMyName(myName === "ParkJinA" ? "JINA" : "ParkJinA");
            }}
            > Change </button>
        </div>
    );
};

export default Main2;