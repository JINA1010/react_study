// 함수형 컴포넌트(권장) : 단축키 rsc
import React, { useState } from 'react';

const Main = () => {
    //let myName = "ParkJinA";  //useState를 사용하여 변경
    const [ myName, setMyName ] = useState("ParkJinA")

    function changeName() {
    /*
        myName = myName === "ParkJinA"  ? "JINA" : "ParkJinA";
        console.log(myName);
        document.getElementById("name").indderText = myName;
    */
        setMyName(myName === "ParkJinA" ? "JINA" : "ParkJinA");
    }

    return (
        <div>
            <h1>Hello. <span id="name">{myName}</span> 입니다.</h1>
           {/* <button onClick={changeName}>Change</button>*/}
            <button onClick={changeName}>Change</button>
        </div>
    );
};

export default Main;