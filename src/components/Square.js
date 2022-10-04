import React, { useState } from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            "margin-top": "10px",
            "margin-left": "50px",
            "width": "750px",
            "height": "650px",
            "background-color": "#FFE0B2",
            "background-size": "cover",
            "position": "relative",
            "box-shadow": "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        }

        return <div style={style}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'left', display: 'inline-block' }}>
                    <div style={{ margin: "90px" }}>
                        <input value={1} type="checkbox" style={{ height: "20px", width: "15px" }} />
                        <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>서비스</text>
                    </div>
                    <div style={{ margin: "90px" }} >
                        <input value={2} type="checkbox" style={{ height: "20px", width: "15px" }} />
                        <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>청결도</text>
                    </div>
                    <div style={{ margin: "90px" }}>
                        <input value={3} type="checkbox" style={{ height: "20px", width: "15px" }} />
                        <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>접근성</text>
                    </div>
                    <div style={{ margin: "90px" }} >
                        <input value={4} type="checkbox" style={{ height: "20px", width: "15px" }} />
                        <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>가격</text>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', textAlign: 'left', display: 'inline-block' }}>
                    <div style={{ margin: "90px" }}>
                        <input value={5} type="checkbox" style={{ height: "20px", width: "15px" }} />
                        <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>화장실</text>
                    </div>
                    <div style={{ margin: "90px" }} >
                        <input value={6} type="checkbox" style={{ height: "20px", width: "15px" }} />
                        <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>룸 컨디션</text>
                    </div>
                    <div style={{ margin: "90px" }}>
                        <input value={7} type="checkbox" style={{ height: "20px", width: "15px" }} />
                        <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>조식</text>
                    </div>
                    <div style={{ margin: "90px" }} >
                        <input value={8} type="checkbox" style={{ height: "20px", width: "15px" }} />
                        <text id="category" style={{ fontSize: "28px", fontFamily: "Gowun", fontWeight: "650" }}>방음</text>
                    </div>
                </div>
            </div>

        </div >
    }
}

export default Square