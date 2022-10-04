import React from "react";
import { useState } from "react";
import "./result.css";
import Title from "../../components/Title";
import Img1 from '../../assets/images/img1.jpg';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.jpg';
import Chart1 from '../../assets/images/chart1.png';



function Result() {

    return (
        <>
            <Title></Title>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ FlexDirection: 'column' }}>

                    <div style={{
                        marginLeft: "80px",
                        marginTop: "40px",
                        width: "800px",
                        height: "200px",
                        border: "1px solid coral",
                        borderRadius: "10px",
                        position: "absolute",
                        display: "flex"
                    }}>

                        <img src={Img1} style={{ width: "350px" }} />
                        <div style={{ display: 'inline-block', fontFamily: "Dohyeon", display: "block", margin: "0 auto" }}>
                            <div style={{ fontSize: "55px", marginTop: "30px", marginBottom: "30px" }}>
                                신라스테이 마포
                            </div>
                            <hr style={{ width: "400px" }} />
                            <div style={{ fontSize: "20px" }}>
                                공덕역 1번출구 도보 3분
                            </div>

                        </div>
                    </div>
                    <div style={{ position: "absolute", fontFamily: "Poppins", fontWeight: "800", fontSize: "30px", color: "#E14F39", fontStyle: "italic", marginTop: "28px", marginLeft: "67px" }}>
                        #1
                    </div>
                    <div style={{
                        marginLeft: "80px",
                        marginTop: "280px",
                        width: "800px",
                        height: "200px",
                        border: "1px solid coral",
                        borderRadius: "10px",
                        position: "absolute",
                        display: "flex"
                    }}>
                        <img src={Img2} style={{ width: "350px" }} />
                        <div style={{ display: 'inline-block', fontFamily: "Dohyeon", display: "block", margin: "0 auto" }}>
                            <div style={{ fontSize: "55px", marginTop: "30px", marginBottom: "30px" }}>
                                글래드 마포
                            </div>
                            <hr style={{ width: "400px" }} />
                            <div style={{ fontSize: "20px" }}>
                                공덕역 바로 앞
                            </div>

                        </div>
                    </div>
                    <div style={{ position: "absolute", fontFamily: "Poppins", fontWeight: "800", fontSize: "30px", color: "#E14F39", fontStyle: "italic", marginTop: "268px", marginLeft: "67px" }}>
                        #2
                    </div>
                    <div style={{
                        marginLeft: "80px",
                        marginTop: "520px",
                        width: "800px",
                        height: "200px",
                        border: "1px solid coral",
                        borderRadius: "10px",
                        position: "absolute",
                        display: "flex"
                    }}>
                        <img src={Img3} style={{ height: "200px", width: "350px" }} />
                        <div style={{ display: 'inline-block', fontFamily: "Dohyeon", display: "block", margin: "0 auto" }}>
                            <div style={{ fontSize: "55px", marginTop: "30px", marginBottom: "30px" }}>
                                스탠포드 호텔 서울
                            </div>
                            <hr style={{ width: "400px" }} />
                            <div style={{ fontSize: "20px" }}>
                                디지털미디어시티역 1.17km 자동차 4분
                            </div>

                        </div>
                    </div>
                    <div style={{ position: "absolute", fontFamily: "Poppins", fontWeight: "800", fontSize: "30px", color: "#E14F39", fontStyle: "italic", marginTop: "508px", marginLeft: "67px" }}>
                        #3
                    </div>
                </div>
                <div>
                    <img src={Chart1} style={{ width: "700px", height: "720px", marginRight: "100px" }} />

                </div>
            </div>
        </>
    );
}

export default Result;