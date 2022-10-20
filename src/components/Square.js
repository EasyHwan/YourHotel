import React, { useState } from 'react';

function Square() {
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
    const [checkedItems, setCheckedItems] = useState(new Set());
    const handleChange = (e) => {
        if (e.target.checked) {
            checkedItems.add(e.target.value);
            setCheckedItems(checkedItems);
        } else if (!e.target.checked && checkedItems.has(e.target.value)) {
            checkedItems.delete(e.target.value);
            setCheckedItems(checkedItems);
        }
        if (checkedItems.size == 4) {
            alert("3개까지만 선택 가능합니다")
            checkedItems.delete(e.target.value);
            e.target.checked = false
        }
        console.log(checkedItems)
    }

    return (<div style={style}>
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
    );
}


export default Square