import React, { useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        // run before the ui is painted
        const width = boxRef.current.offsetWidth;
        console.log("box width:", width);

    }, []);
    return (
        <div ref={boxRef}
            style={{
                width: "200px",
                height: "100px",
                background: "skyblue",
                padding: "10px",
                fontSize: "20px"
            }}
        >
            UseLayoutEffect
        </div>
    );
};

export default UseLayoutEffect
