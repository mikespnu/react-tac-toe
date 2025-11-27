let myList = [1,2,3,4,5,6,7,8,9];
let loggedin = true;
let holiday = true;

const Clock = () => {

    let gordo = myList.map( (i)=> {
        return (<li key="{i}">{i}</li>)
    })


    return (


        <div>
            <p>This is my Clock!</p>
            <ul>{gordo}</ul>
            { loggedin ? (<p>User is logged in!!</p>) : (<p>User is not logged in!</p>) }
         
            {/* or when you don't need an else statement you can use && see below*/}
            {holiday && (<span>Yes today is a holiday!!</span>)}
            
        </div>


    )
}


export default Clock