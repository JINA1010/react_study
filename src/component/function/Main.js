import React from 'react';
import PropTypes from 'prop-types';   // 프로퍼티 타입을 지정해주기 위해 사용 한다.

/*
function Main({name, color}) {
    return (
        <div>
            <main>
                <h1 style={{color}}>Hellow. {name}</h1>
            </main>
        </div>
    );
}
*/

function Main({color, name, maleYn}) {
    const msg = maleYn ? '남자' : '여자'; // Boolean 사용

    return (
        <div>
            <main>
                <h1 style={{color}}>Hello. {name} 입니다. ({msg})</h1>
            </main>
        </div>
    );
}

// 프로퍼티 타입 지정
Main.propTypes = {
    name: PropTypes.string
}

// 프로퍼티 기본값 지정
Main.defaultProps = {
    name: '디폴트'
}

/*
// 프로퍼티 타입 지정 및 필수값 설정
Main.propTypes = {
    name: PropTypes.string.isRequired
}
*/


export default Main;  //다른 js파일에서 불러올 수 있도록 내보내주기