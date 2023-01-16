// JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달.
import React, { useState } from 'react';

const Main = () => {
    const [ myName, setMyName ] = useState("ParkJinA")

    function changeName() {
        setMyName(myName === "ParkJinA" ? "JINA" : "ParkJinA");
    }

    return (
        <div>
            <h1>Hello. {myName}</h1>
            <button onClick={changeName}>Change</button>
        </div>
    );
};

export default Main;