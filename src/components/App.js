import React from "react";
import "../styles/App.css";
import like from "../like.svg";

const App = () => {
    const [count, setCount] = React.useState(0);
    const [bgCount, setBgCount] = React.useState(0);
    const clickHandler = () => {
        setCount(count + 1);
        setBgCount(bgCount + 0.1);
    };

    return (
        <div id="main">
            <img
                id="like-btn-img"
                style={{
                    fill: "white",
                    width: "100px",
                    backgroundColor: `rgba(255,0,0,${bgCount})`,
                }}
                src={like}
                onClick={() => {
                    clickHandler();
                }}
            />
            <h3>
                Likes: <span id="like-counter">{count}</span>
            </h3>
        </div>
    );
};

export default App;
