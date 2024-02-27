import Nav from "./Nav.jsx";

function Index(props) {

    return ( <>
        <h1>Hello World!</h1>
        <h2>{props.name}</h2>
      <Nav/>
    </> );
}

export default Index;