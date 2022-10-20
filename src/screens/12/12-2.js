import React from "react";
import { useState } from "react";
import Title from "../../components/Title";
import Img1 from '../../assets/images/tmark.jpg';
import Img2 from '../../assets/images/lottemapo.jpg';
import Img3 from '../../assets/images/livera.jpg';
import Room1 from '../../assets/images/room1.jpg';
import Room2 from '../../assets/images/room2.jpg';
import Room3 from '../../assets/images/room3.jpeg';
import Room6 from '../../assets/images/room6.jpeg';
import Room5 from '../../assets/images/room5.jpg';
import Room7 from '../../assets/images/room7.jpeg';



function Page12_2() {
    let [modal1, setModal1] = useState(false);
    let [modal2, setModal2] = useState(false);
    let [modal3, setModal3] = useState(false);
    const [color1, setColor1] = useState('white');
    const [color2, setColor2] = useState('white');
    const [color3, setColor3] = useState('white');

    const handleColor1 = (e) => {
        console.log(e)
        if (modal1 == false) {
            setColor1("coral");
        }
        else if (modal1 == true) {
            setColor1("white");

        }
    }
    const handleColor2 = (e) => {
        console.log(e)
        if (modal2 == false) {
            setColor2("coral");
        }
        else if (modal2 == true) {
            setColor2("white");

        }
    }
    const handleColor3 = (e) => {
        console.log(e)
        if (modal3 == false) {
            setColor3("coral");
        }
        else if (modal3 == true) {
            setColor3("white");

        }
    }

    return (
        <>
            <Title></Title>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>

                    <div style={{
                        marginLeft: "80px",
                        marginTop: "40px",
                        width: "600px",
                        height: "200px",
                        border: "1px solid coral",
                        borderRadius: "10px",
                        position: "absolute",
                        display: "flex"
                    }}>

                        <img src={Img1} style={{ width: "250px" }} />
                        <div style={{ display: 'inline-block', fontFamily: "Dohyeon", display: "block", margin: "0 auto" }}>
                            <div style={{ fontSize: "36px", marginTop: "20px", marginBottom: "20px" }}>
                                명동 티마크 그랜드 호텔
                            </div>
                            <hr style={{ width: "330px" }} />
                            <div style={{ fontSize: "25px", display: "flex", justifyContent: "space-between" }}>
                                <div style={{ color: "gold", display: "flex" }}>
                                    ★
                                    <div style={{ color: "black" }}>
                                        4.7
                                    </div>
                                </div>
                                87,000원
                                <div >

                                </div>

                            </div>

                            <div>

                            </div>
                            <hr style={{ width: "330px" }} />
                            <div style={{ fontSize: "20px" }}>
                                회현역 2,3번출구 도보 2분
                            </div>

                        </div>
                    </div>
                    <div style={{ position: "absolute", fontFamily: "Poppins", fontWeight: "800", fontSize: "30px", color: "#E14F39", fontStyle: "italic", marginTop: "28px", marginLeft: "67px" }}>
                        #1
                    </div>
                    <div style={{
                        marginLeft: "740px",
                        marginTop: "85px",
                        width: "400px",
                        height: "150px",
                        border: "1px solid coral",
                        borderRadius: "10px",
                        position: "absolute",
                        display: "flex"
                    }}>
                        <img src={Img2} style={{ width: "180px", height: "150px" }} />
                        <div style={{ display: 'inline-block', fontFamily: "Dohyeon", display: "block", margin: "0 auto" }}>
                            <div style={{ fontSize: "30px", marginTop: "15px", marginBottom: "15px" }}>
                                롯데시티호텔 마포
                            </div>
                            <hr style={{ width: "200px" }} />
                            <div style={{ fontSize: "15px", display: "flex", justifyContent: "space-between" }}>
                                <div style={{ color: "gold", display: "flex" }}>
                                    ★
                                    <div style={{ color: "black" }}>
                                        4.8
                                    </div>
                                </div>
                                193,320원
                                <div >

                                </div>

                            </div>
                            <hr style={{ width: "200px" }} />
                            <div style={{ fontSize: "15px" }}>
                                공덕역 2번출구 도보 1분
                            </div>

                        </div>
                    </div>
                    <div style={{ position: "absolute", fontFamily: "Poppins", fontWeight: "800", fontSize: "25px", color: "#E14F39", fontStyle: "italic", marginTop: "73px", marginLeft: "730px" }}>
                        #2
                    </div>
                    <div style={{
                        marginLeft: "1200px",
                        marginTop: "85px",
                        width: "400px",
                        height: "150px",
                        border: "1px solid coral",
                        borderRadius: "10px",
                        position: "absolute",
                        display: "flex"
                    }}>
                        <img src={Img3} style={{ width: "180px", height: "150px" }} />
                        <div style={{ display: 'inline-block', fontFamily: "Dohyeon", display: "block", margin: "0 auto" }}>
                            <div style={{ fontSize: "30px", marginTop: "15px", marginBottom: "15px" }}>
                                호텔 리베라 청담
                            </div>
                            <hr style={{ width: "200px" }} />
                            <div style={{ fontSize: "15px", display: "flex", justifyContent: "space-between" }}>
                                <div style={{ color: "gold", display: "flex" }}>
                                    ★
                                    <div style={{ color: "black" }}>
                                        4.5
                                    </div>
                                </div>
                                170,000원
                                <div >

                                </div>

                            </div>
                            <hr style={{ width: "200px" }} />
                            <div style={{ fontSize: "15px" }}>
                                청담역 12,13번 출구에서 도보 5분 거리
                            </div>

                        </div>
                    </div>
                    <div style={{ position: "absolute", fontFamily: "Poppins", fontWeight: "800", fontSize: "25px", color: "#E14F39", fontStyle: "italic", marginTop: "73px", marginLeft: "1190px" }}>
                        #3
                    </div>
                </div>

            </div>
            <div style={{ fontFamily: "DoHyeon", fontWeight: "300", fontSize: "35px", marginTop: "245px", marginRight: "1580px" }} >
                리뷰 사진
            </div>
            <div style={{ display: "flex" }}>
                <div onClick={() => {
                    setModal1(!modal1);
                    setModal2(false);
                    setModal3(false);
                    handleColor1(color1);
                    setColor2("white");
                    setColor3("white");
                }}
                    style={{
                        backgroundColor: color1,
                        color: "black",
                        textDecorationLine: "none",
                        marginLeft: "20px",
                        marginTop: "10px",
                        width: "120px",
                        height: "30px",
                        border: "1px solid coral",
                        borderRadius: "10px"
                    }}>
                    조식
                </div>
                <div onClick={() => {
                    setModal2(!modal2);
                    setModal1(false);
                    setModal3(false);
                    handleColor2(color2);
                    setColor1("white");
                    setColor3("white");
                }}
                    style={{
                        backgroundColor: color2,
                        color: "black",
                        textDecorationLine: "none",
                        marginLeft: "10px",
                        marginTop: "10px",
                        width: "120px",
                        height: "30px",
                        border: "1px solid coral",
                        borderRadius: "10px"
                    }}>
                    수영장
                </div>
                <div onClick={() => {
                    setModal3(!modal3)
                    setModal1(false);
                    setModal2(false);
                    handleColor3(color3);
                    setColor1("white");
                    setColor2("white");
                }}
                    style={{
                        backgroundColor: color3,
                        color: "black",
                        textDecorationLine: "none",
                        marginLeft: "10px",
                        marginTop: "10px",
                        width: "120px",
                        height: "30px",
                        border: "1px solid coral",
                        borderRadius: "10px"
                    }}>
                    방
                </div>
            </div>
            {modal1 === true ?
                <div>
                    <div style={{ display: "flex" }}>
                        <img src={Room1} style={{ height: "180px", weight: "120px", padding: "15px" }}></img>

                    </div>
                    <div style={{ display: "flex" }}>
                        <img src={Room5} style={{ height: "180px", weight: "120px", padding: "15px" }}></img>

                    </div>
                </div> : null}
            {modal2 === true ?
                <div>
                    <div style={{ display: "flex" }}>
                        <img src={Room2} style={{ height: "180px", weight: "120px", padding: "15px" }}></img>

                    </div>
                    <div style={{ display: "flex" }}>
                        <img src={Room6} style={{ height: "180px", weight: "120px", padding: "15px" }}></img>

                    </div>
                </div> : null}

            {modal3 === true ?
                <div>
                    <div style={{ display: "flex" }}>
                        <img src={Room3} style={{ height: "180px", weight: "120px", padding: "15px" }}></img>

                    </div>
                    <div style={{ display: "flex" }}>
                        <img src={Room7} style={{ height: "180px", weight: "120px", padding: "15px" }}></img>

                    </div>
                </div> : null}

        </>
    );
}

export default Page12_2;