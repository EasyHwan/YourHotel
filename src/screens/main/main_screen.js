import React from "react";
import "./main.css";
import Title from "../../components/Title";
import Square from "../../components/Square";

function Main() {
    return (
        <>
            <Title></Title>
            <div id="quest" style={{ marginLeft: "90px" }}>
                Q : 호텔을 고르실 때 중요하게 여기시는 요소를 3가지 선택해주십시오.
            </div>
            <div className='wrap' style={{ display: 'flex', marginLeft: "80px" }}>
                <Square />
                <div style={{ display: 'inline-block' }}>
                    <div style={{ marginLeft: "40px", fontSize: "26px", fontWeight: "500", fontFamily: "DoHyeon", backgroundColor: "coral", textAlign: "left", width: "450px", marginLeft: "200px" }}>
                        추가 필요 시설을 선택해주십시오.
                    </div>
                    <hr style={{ marginLeft: "200px", width: "450px" }} />
                    <div style={{ marginTop: "50px", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                        주차장
                    </div>
                    <select style={{ marginTop: "10px", marginLeft: "250px", height: "30px", width: "300px" }}>
                        <option key="불필요" value='no'>불필요</option>
                        <option key="필요" value='yes'>필요</option>
                    </select>
                    <div style={{ marginTop: "30px", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                        수영장
                    </div>
                    <select style={{ marginTop: "10px", marginLeft: "250px", height: "30px", width: "300px" }}>
                        <option key="불필요" value='no'>불필요</option>
                        <option key="필요" value='yes'>필요</option>
                    </select>
                    <div style={{ marginTop: "30px", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                        헬스장
                    </div>
                    <select style={{ marginTop: "10px", marginLeft: "250px", height: "30px", width: "300px" }}>
                        <option key="불필요" value='no'>불필요</option>
                        <option key="필요" value='yes'>필요</option>
                    </select>
                    <div style={{ marginLeft: "15px", marginTop: "30px", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                        애견 동반
                    </div>
                    <select style={{ marginTop: "10px", marginLeft: "250px", height: "30px", width: "300px" }}>
                        <option key="불필요" value='no'>불필요</option>
                        <option key="필요" value='yes'>필요</option>
                    </select>
                    <div>

                    </div>
                    <input type={"submit"} value="제출하기" style={{ width: "180px", height: "60px", marginTop: "120px", marginLeft: "370px", fontFamily: "DoHyeon", fontSize: "22px" }}>
                    </input>
                </div>
            </div>
        </>
    );
}

export default Main;