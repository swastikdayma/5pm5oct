// import Index from "./Index.jsx";
// import alldata from "./person.json";
// import State from "./State.jsx";
import State1 from "./State1.jsx";


function App() {


  return ( <>

  <State1/>

  {/* <State/> */}
   {/* <Index name="swastik"/> */}


   {/* {
   alldata && alldata.map( data => {
          return(
            <div key={data.id}>
              <h1>{data.name}</h1>
              <h2>{data.rollno}</h2>


              {
               data && data.newp.map(data1 => {
                  return(
                    <div key={data.id}>
                    <h3>{data1.person1}</h3>
                    </div>
                  )
                })
              }
            </div>
          )
    })

   } */}

   



   
  </> );
}

export default App;

