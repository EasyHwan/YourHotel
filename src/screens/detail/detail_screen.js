import React from "react";
import Title from "../../components/Title";
import Room1 from '../../assets/images/room1.jpg';
import Room2 from '../../assets/images/room2.jpg';
import Room3 from '../../assets/images/room3.jpeg';
import Room6 from '../../assets/images/room6.jpeg';
import Room5 from '../../assets/images/room5.jpg';
import Room7 from '../../assets/images/room7.jpeg';

function Detail() {
    return (
        <>
            <Title></Title>
            <div style={{ FlexDirection: 'column', textAlign: "left" }}>
                <div style={{ fontFamily: "Gowun", fontWeight: "1000", fontSize: "35px", marginLeft: "15px", marginTop: "15px" }}>
                    "신라스테이 마포" 바로 예약하러 가기
                </div>
                <div onClick={() => window.open('https://place-site.yanolja.com/places/3001415', '_blank')} style={{ fontWeight: "500px", fontSize: "30px", marginLeft: "35px", marginTop: "15px", color: "blue", textDecoration: "underline" }}>
                    https://place-site.yanolja.com/places/3001415
                </div>
                <div style={{ fontFamily: "DoHyeon", fontWeight: "300", fontSize: "35px", marginLeft: "15px", marginTop: "40px" }} >
                    리뷰 사진
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{
                        marginLeft: "20px",
                        marginTop: "10px",
                        width: "120px",
                        height: "40px",
                        border: "1px solid coral",
                        borderRadius: "10px",
                        backgroundColor: "coral"
                    }}>
                        <div style={{ textAlign: "center", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                            방
                        </div>
                    </div>
                    <div style={{
                        marginLeft: "30px",
                        marginTop: "10px",
                        width: "120px",
                        height: "40px",
                        border: "1px solid coral",
                        borderRadius: "10px"

                    }}>
                        <div style={{ textAlign: "center", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                            조식
                        </div>
                    </div>
                    <div style={{
                        marginLeft: "30px",
                        marginTop: "10px",
                        width: "120px",
                        height: "40px",
                        border: "1px solid coral",
                        borderRadius: "10px"
                    }}>
                        <div style={{ textAlign: "center", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                            수영장
                        </div>
                    </div>
                    <div style={{
                        marginLeft: "30px",
                        marginTop: "10px",
                        width: "120px",
                        height: "40px",
                        border: "1px solid coral",
                        borderRadius: "10px"
                    }}>
                        <div style={{ textAlign: "center", fontFamily: "Gowun", fontSize: "20px", fontWeight: "800" }}>
                            야외
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Room1} style={{ height: "200px", weight: "150px", padding: "20px" }}></img>
                    <img src={Room2} style={{ height: "200px", weight: "150px", padding: "20px" }}></img>
                    <img src={Room3} style={{ height: "200px", weight: "150px", padding: "20px" }}></img>
                </div>
                <div>
                    <img src={Room5} style={{ height: "200px", weight: "150px", padding: "20px" }}></img>
                    <img src={Room6} style={{ height: "200px", weight: "150px", padding: "20px" }}></img>
                    <img src={Room7} style={{ height: "200px", weight: "150px", padding: "20px" }}></img>
                </div>
            </div>

        </>

    )

}

export default Detail;
