import React, { useEffect } from 'react';
function Example2() {
    useEffect(() => {
        console.log("Component mounted!");

    }, []); // empty dependency array return 
    < h2 > Runs only once when mounted!</ h2 >;
}
export default Example2;