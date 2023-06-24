import React from "react";


function App() {
    let time = new Date().toLocaleTimeString();
    var [currentTime,setCount]=React.useState(time);

    function getTime(){    
        currentTime=new Date().toLocaleTimeString();
        setCount(currentTime);
        console.log(currentTime);
    }

    setInterval(getTime,1000);

    return (
        <div className={"container"}>
            <h1>{currentTime}</h1>
        </div>
    );
}

export default App;
