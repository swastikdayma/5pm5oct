function State() {

let x = 10;

function handlex(){
    x = 20
}
    return ( <>

        <h1>{x}</h1>
        <button onClick={handlex}>click me</button>
    </> );
}

export default State;