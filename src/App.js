/*
import React, { Component} from "react";  // react를 구현할 수 있는 플러그인을 연결
import Header from "./component/function/Header";
import Footer from "./component/function/Footer";
import Main from "./component/state/Main";
import Wrapper from "./component/function/Wrapper";
// js파일에 외부 파일을 불러오는 것이기 때문에 "import" 키워드를 사용한다.
// 같은 js파일은 확장자를 사용하지 않는다.

function App() {
  return (
      <div>
        <Header />
        <Wrapper>
            <Main name="React" color="blue" maleYn/>
            <Main name="React2" color="black"/>
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;  // 다른 js파일에서 불러올 수 있도록 내보내주기
*/

import React from 'react';
import Main from './component/map/Main2'

const App = () => {
    const names = ["박진아",19],
                  ["찌나",29],
                  ["지나",39]
    const nameList = names.map((name) => (<Main name={name[0]} age={name[1]}/>))
    return (
        <div>
            {nameList}
        </div>
    );
};

export default App;