import { useState } from "react";

function buttonClicked() {
        console.log('User Pressed Button!');

    }






const MyButton = () => {

    const [count,setCount] = useState(2);

    return (
        <>
        <button onClick={()=>{buttonClicked(); setCount(count +5); console.log(setCount)}}>Button Clicked {count >= 100 ? (`count is ${count}`): count } times!</button>
        </>
    )


}


export default MyButton