import React, { useState } from 'react';
import "./main.css";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";




function Main() {


    let navigate = useNavigate();
    const [checkedOptions, setCheckedOption] = useState(0);
    const [checkedItems, setCheckedItems] = useState(new Set());
    // 서비스 : 1, 청결도 : 2, 접근성: 3, 화장실: 4, 룸컨디션: 5, 조식: 6, 방음: 7
    const checkPage = () => {

        let setArr = new Set(checkedItems)
        const temp = Array.from(setArr)
        temp.sort();
        if (temp[0] == 1 && temp[1] == 2 && checkedOptions == 0) {
            navigate("/Page1_1")
        }
        else if (temp[0] == 1 && temp[1] == 3 && checkedOptions == 0) {
            navigate("/Page2_1")
        }
        else if (temp[0] == 1 && temp[1] == 4 && checkedOptions == 0) {
            navigate("/Page3_1")
        }
        else if (temp[0] == 1 && temp[1] == 5 && checkedOptions == 0) {
            navigate("/Page4_1")
        }
        else if (temp[0] == 1 && temp[1] == 6 && checkedOptions == 0) {
            navigate("/Page5_1")
        }
        else if (temp[0] == 1 && temp[1] == 7 && checkedOptions == 0) {
            navigate("/Page6_1")
        }
        else if (temp[0] == 2 && temp[1] == 3 && checkedOptions == 0) {
            navigate("/Page7_1")
        }
        else if (temp[0] == 2 && temp[1] == 4 && checkedOptions == 0) {
            navigate("/Page8_1")
        }
        else if (temp[0] == 2 && temp[1] == 5 && checkedOptions == 0) {
            navigate("/Page9_1")
        }
        else if (temp[0] == 2 && temp[1] == 6 && checkedOptions == 0) {
            navigate("/Page10_1")
        }
        else if (temp[0] == 2 && temp[1] == 7 && checkedOptions == 0) {
            navigate("/Page11_1")
        }
        else if (temp[0] == 3 && temp[1] == 4 && checkedOptions == 0) {
            navigate("/Page12_1")
        }
        else if (temp[0] == 3 && temp[1] == 5 && checkedOptions == 0) {
            navigate("/Page13_1")
        }
        else if (temp[0] == 3 && temp[1] == 6 && checkedOptions == 0) {
            navigate("/Page14_1")
        }
        else if (temp[0] == 3 && temp[1] == 7 && checkedOptions == 0) {
            navigate("/Page15_1")
        }
        else if (temp[0] == 4 && temp[1] == 5 && checkedOptions == 0) {
            navigate("/Page16_1")
        }
        else if (temp[0] == 4 && temp[1] == 6 && checkedOptions == 0) {
            navigate("/Page17_1")
        }
        else if (temp[0] == 4 && temp[1] == 7 && checkedOptions == 0) {
            navigate("/Page18_1")
        }
        else if (temp[0] == 5 && temp[1] == 6 && checkedOptions == 0) {
            navigate("/Page19_1")
        }
        else if (temp[0] == 5 && temp[1] == 7 && checkedOptions == 0) {
            navigate("/Page20_1")
        }
        else if (temp[0] == 6 && temp[1] == 7 && checkedOptions == 0) {
            navigate("/Page21_1")
        }
        else if (temp[0] == 1 && temp[1] == 2 && checkedOptions == 1) {
            navigate("/Page1_2")
        }
        else if (temp[0] == 1 && temp[1] == 3 && checkedOptions == 1) {
            navigate("/Page2_2")
        }
        else if (temp[0] == 1 && temp[1] == 4 && checkedOptions == 1) {
            navigate("/Page3_2")
        }
        else if (temp[0] == 1 && temp[1] == 5 && checkedOptions == 1) {
            navigate("/Page4_2")
        }
        else if (temp[0] == 1 && temp[1] == 6 && checkedOptions == 1) {
            navigate("/Page5_2")
        }
        else if (temp[0] == 1 && temp[1] == 7 && checkedOptions == 1) {
            navigate("/Page6_2")
        }
        else if (temp[0] == 2 && temp[1] == 3 && checkedOptions == 1) {
            navigate("/Page7_2")
        }
        else if (temp[0] == 2 && temp[1] == 4 && checkedOptions == 1) {
            navigate("/Page8_2")
        }
        else if (temp[0] == 2 && temp[1] == 5 && checkedOptions == 1) {
            navigate("/Page9_2")
        }
        else if (temp[0] == 2 && temp[1] == 6 && checkedOptions == 1) {
            navigate("/Page10_2")
        }
        else if (temp[0] == 2 && temp[1] == 7 && checkedOptions == 1) {
            navigate("/Page11_2")
        }
        else if (temp[0] == 3 && temp[1] == 4 && checkedOptions == 1) {
            navigate("/Page12_2")
        }
        else if (temp[0] == 3 && temp[1] == 5 && checkedOptions == 1) {
            navigate("/Page13_2")
        }
        else if (temp[0] == 3 && temp[1] == 6 && checkedOptions == 1) {
            navigate("/Page14_2")
        }
        else if (temp[0] == 3 && temp[1] == 7 && checkedOptions == 1) {
            navigate("/Page15_2")
        }
        else if (temp[0] == 4 && temp[1] == 5 && checkedOptions == 1) {
            navigate("/Page16_2")
        }
        else if (temp[0] == 4 && temp[1] == 6 && checkedOptions == 1) {
            navigate("/Page17_2")
        }
        else if (temp[0] == 4 && temp[1] == 7 && checkedOptions == 1) {
            navigate("/Page18_2")
        }
        else if (temp[0] == 5 && temp[1] == 6 && checkedOptions == 1) {
            navigate("/Page19_2")
        }
        else if (temp[0] == 5 && temp[1] == 7 && checkedOptions == 1) {
            navigate("/Page20_2")
        }
        else if (temp[0] == 6 && temp[1] == 7 && checkedOptions == 1) {
            navigate("/Page21_2")
        }
    }
    const handleOption = (e) => {
        if (e.target.value == 'yes') {
            setCheckedOption(checkedOptions + 1)
        }
        else if (e.target.value == 'no') {
            setCheckedOption(checkedOptions - 1);

        }
        console.log(checkedOptions)
    }
    const handleChange = (e) => {
        if (e.target.checked) {
            checkedItems.add(e.target.value);
            setCheckedItems(checkedItems);
        } else if (!e.target.checked && checkedItems.has(e.target.value)) {
            checkedItems.delete(e.target.value);
            setCheckedItems(checkedItems);
        }
        if (checkedItems.size == 3) {
            alert("2개까지만 선택 가능합니다")
            checkedItems.delete(e.target.value);
            e.target.checked = false
        }
        console.log(checkedItems)
    }
    return (
        <>
            <Title></Title>
            <div id="quest" style={{ marginLeft: "70px" }}>
                Q : 호텔을 고르실 때 중요하게 여기시는 요소를 2가지 선택해주십시오.
            </div>
            <div style={{ display: "flex" }}>
                <div style={{
                    width: "750px",
                    height: "650px", marginLeft: "140px", backgroundColor: "#FFE0B2", boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
                }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'left', display: 'inline-block' }}>
                            <div style={{ marginTop: "10px", marginLeft: "80px", marginRight: "60px" }}>
                                <input value={1} onChange={handleChange} type="checkbox" />
                                <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>서비스</text>
                            </div>
                            <div style={{ marginTop: "140px", marginLeft: "80px" }} >
                                <input value={2} onChange={handleChange} type="checkbox" style={{ height: "20px", width: "15px" }} />
                                <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>청결도</text>
                            </div>
                            <div style={{ marginTop: "140px", marginLeft: "80px" }}>
                                <input value={3} onChange={handleChange} type="checkbox" style={{ height: "20px", width: "15px" }} />
                                <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>접근성</text>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', textAlign: 'left', display: 'inline-block' }}>
                            <div style={{ margin: "90px" }}>
                                <input value={4} onChange={handleChange} type="checkbox" style={{ height: "20px", width: "15px" }} />
                                <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>화장실</text>
                            </div>
                            <div style={{ margin: "90px" }} >
                                <input value={5} onChange={handleChange} type="checkbox" style={{ height: "20px", width: "15px" }} />
                                <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>룸 컨디션</text>
                            </div>
                            <div style={{ margin: "90px" }}>
                                <input value={6} onChange={handleChange} type="checkbox" style={{ height: "20px", width: "15px" }} />
                                <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>조식</text>
                            </div>
                            <div style={{ margin: "90px" }} >
                                <input value={7} onChange={handleChange} type="checkbox" style={{ height: "20px", width: "15px" }} />
                                <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>방음</text>
                            </div>
                        </div>
                    </div>

                </div >

                <div className='wrap' style={{ display: 'flex', marginLeft: "50px" }}>
                    <div style={{ display: 'inline-block' }}>
                        <div style={{ marginLeft: "20px", fontSize: "26px", fontWeight: "500", fontFamily: "DoHyeon", backgroundColor: "coral", textAlign: "left", width: "450px", marginLeft: "200px" }}>
                            추가 필요 시설을 선택해주십시오.
                        </div>
                        <hr style={{ marginLeft: "200px", width: "450px" }} />
                        <div style={{ marginTop: "50px", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                            수영장
                        </div>
                        <select onChange={handleOption} style={{ marginTop: "10px", marginLeft: "250px", height: "30px", width: "300px" }}>
                            <option key="불필요" value='no'>불필요</option>
                            <option key="필요" value='yes'>필요</option>
                        </select>
                        <div style={{ marginTop: "50px", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                            주차장
                        </div>
                        <select style={{ marginTop: "10px", marginLeft: "250px", height: "30px", width: "300px" }}>
                            <option key="불필요" value='no'>불필요</option>
                            <option key="필요" value='yes'>필요</option>
                        </select>
                        <div>

                        </div>
                        <input type={"submit"} value="제출하기" onClick={checkPage} style={{ width: "180px", height: "60px", marginTop: "270px", marginLeft: "370px", fontFamily: "DoHyeon", fontSize: "22px" }}>
                        </input>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;