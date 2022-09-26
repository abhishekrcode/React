//About Componnet--->App making  -->1st Part

// import react from "react";
// import Heading from './Heading';
// import List from "./List";

// function App(){
//   return (
//     <>
//     <Heading/>
//     <List/>
//   </>
//   );
// }

// export default App;

//-----------------------------------------------------------------------------------//

//chaleenge to make component of good morning challenge

// import react from 'react';

// function App(){
//   const currTime= new Date().getHours();
// let greeting="";
// const css={};
// if(currTime>=0 && currTime<12){
//   greeting="Good Morning";
//   css.color="green";
// }
// else if(currTime>=12 && currTime<18){
//   greeting="Good After NooN";
//   css.color="yellow";
// }
// else if(currTime>=18 && currTime<24){
//   greeting="Good Night";
//   css.color="black";
// }

// return(
//   <>
//  <h1 >Hello Sir, <span style={css}>{greeting}</span> </h1>
// </>
// )
// }

// export default App;

//-----------------------------------------------------------------------------------//

//import and export  Explaination

// const coder="Abhishek";

// const favProg= "React js";

// function myName(){
//   let name="Mera Name Abhishek Raj Hai";
//   return name;
// }

// export default coder;
// Hum Default kewal ek he keliye use kr skte hai remember.
// and ek ko default kiya hai tho baaki ko curly braceses mai likhna hoga like this

// export {favProg,myName};

// ab kitne bhi export kar skte hai "," laga laga kar export {favProg, gdaf,adgdsf,adfd....};

//------------------------------------------------------------------------------------------------//

//calculator
// import React from 'react';
// import { add,Subtract,Multiply,Devide} from "./calc.jsx";
// function App(){
//   return <>
//     <ul>
//       <li>Sum of Two numbers is: {add(40,4)}</li>
//       <li>Subtract of Two numbers is: {Subtract(40,4)}</li>
//       <li>Multiply of Two numbers is: {Multiply(40,4)}</li>
//       <li>Devide of Two numbers is: {Devide(40,4)}</li>
//     </ul>
//   </>
// }

// export {App};

// <--------------------------------------------------------------------------------------->
//Netflix kaa App

// import React from 'react';
// import Card from './Cards'
// import Sdata from './Sdata'
// import "./Netflix.css"

// const App = () =>(<>
// <h1 className="Heading_style">List of Best Netflix Series in 2022 </h1>
// {Sdata.map((val)=>{
//   return (<
//     Card
//    key={val.id}
//   imgsrc={val.imgsrc}
//   title={val.title}
//   sname={val.sname}
//   link={val.link}
// />);
// })}
// </>
// );

// export default App;

//if else ka use kaise hota hai essi netflix ke project mai he samjh lo

// import React from 'react';
// import Card from './Cards'
// import Sdata from './Sdata'
// import "./Netflix.css"

// const viewer="Money Heist";
// const Favs=()=>{
// if(viewer==="Money Heist"){
//   return (
//     <
//     Card
//     key={Sdata[0].id}
//     imgsrc={Sdata[0].imgsrc}
//     title={Sdata[0].title}
//     sname={Sdata[0].sname}
//     link={Sdata[0].link}
//     />
//     );
//   }else{

// }
// };
// const App = () =>(<>
// <h1 className="Heading_style">List of Best Netflix Series in 2022 </h1>
// <Favs/>
// </>
// );

// export default App;

//ab kya kar sakte hai ki eska component bhi bana sakte hai MoneyHeist ka

// import React from 'react';
// import Card from './Cards'
// import Sdata from './Sdata'
// import "./Netflix.css"
// import NetflixComponent from './NetflixComponent';

// const viewer="Amazon";
// // const Favs=()=>{
// // if(viewer==="Netflix"){
// //   return <NetflixComponent/>
// //   }else{

// // }
// // }; /eske jagah ternery condition bhi laga kar use kar sakte hai
// const App = () =>(<>
// <h1 className="Heading_style">List of Best Netflix Series in 2022 </h1>
// {/* <Favs/> */}
// {/* ab eske jagah simple ternery statement use kar sakte hai  */}
// {viewer==="Netflix"?<NetflixComponent/> :"Amazon wala component banakar dikha skte hai " }

// </>
// );

// export default App;

//--------------------------------------------------------------------------------------//

// //Hooks in react

// //1. Hooks are the new feature introduced in React 16.8 version.

// //2.It allows you to use state and other React feature witout writing a class.Hooks are the funtion which "hook into" React state and lifecycle feature from function component.

// //3.It does not work inside class.

// //4.Hooks should  always be used at the top level of the React funtion

// //5. Node version 6 or above .NPM version 5.2 or above.

// import React, { useState } from 'react';

// const App=()=>{
//     const state = useState();
// const[count,setCount]=useState(0);

// const IncFun=()=>{
//     setCount(count + 1);
//     console.log("clicked");

// };

//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={IncFun}>Count</button>

//         </>
//     );
// }

// export default App;

// //emai hum direct funtion likh kar count nehi use kar paayenge uske liye useState use karte hai jisko hook bolte hai. esmai basically kya karna hota hai ki ek state constant banana padta hai jismai useState() funtion daalte hai usse or yeh funtion jo hai yeh do cheez deta hai normal funtion ek hee cheez return karta hai na but yeh do chize return karta hai ek tho hota hai eska current value and second ek funtion return karta hai jo udated value return karta hai tho eska use karke hum click karne par number ko increment kara sakte hai React mai.

// //Note:-esko humesha funtion ke andar he likha jaata hai jaise yaha App() ke andar likha gaya hai bahar nehi likh sakte hai naa he class ke andar likh sakte hai.

//--------------------------------------------------------------------------------------------------------------//

//Challenge :- First show the current time and when you click the button then the time should be updated.

// import React, { useState } from 'react';
// import './TimeStyle.css'

// const App=()=>{
//     const currTime=new Date().toLocaleTimeString();
//     const state = useState();
// const[curr,setCount]=useState(currTime);

// const IncFun=()=>{
//     setCount([curr]);
//     console.log("clicked");

// };

//     return (
//         <>
//         <h1 className="Heading_style">{currTime}</h1>
//         <button onClick={IncFun}>Current Time</button>

//         </>
//     );
// }

// export default App;

//chalenge to make digital clock

// import React, { useState } from 'react';
// import './TimeStyle.css'

// const App=()=>{
//     let currTime=new Date().toLocaleTimeString();//let lena jaruri hai kyoki currTime ke value change ho rhi hai baar  baar.
//     const state = useState();

// const[curr,setCount]=useState(currTime);

// const IncFun=()=>{
//     currTime = new Date().toLocaleTimeString();
//     setCount(currTime);

// };

// setInterval(IncFun,1000);

//     return (
//         <>
//         <h1 className="Heading_style">{currTime}</h1>

//         </>
//     );
// }

// export default App;

//-------------------------------------------------------------------------------------------------------------//



//form filling challenge.


//esmai  input field mai jo bhi likh rahe hai usko use karne ke liye onChange event ka use karte hai dhyan rkhna  and uske baad hum esmai basicallay kya kar rhe hai ki pehle input field mai onChange laga kar hum jo bhi usmai likh rhe hai usko prapt kar rhe hai conole karne par dikhta hia event.target.value krne par and the esmai ek problem hai ji hum jo bhi likh rhe honge wo directly hello ke sath mai likh jaaeyga or hum chahte hai ki submit karne pr he likha jaaye tho uske liye value props use karenge and usmai name  varible ki value daal denge usse kya hoga ki ab value jo likhenge wo direct mai store ho jaayega and then uske baad kya ki ek or function bana lenge submit button par click kaare tho wo value display ho jaaye uske liye onClick use kar lenge usmai event ke taur par.

//form ka use karne se enter maarne par bhi submit ho jaata hai 
//form ka use karne se submit karne par page refresh ho jata hai by default tho usse prevent karne ke liye hume event.preventDefault() funtion ke andar call karna padta hai yeh sab html ka part hai lekin tumko nehi pata yeh sab yaad rkho....dheere dheere sab sikh jaaoge project banate banate samajh gye na.

//yaha form ke andar button mai type submit karne se wo form ke onClick event ko trigger kar de raha hai.


// import react, { useState } from "react";


// const App = () => {
  

//   const [name, setName] = useState("");
//   const [fullName,setFullName] = useState();

//   const inputevent = (event) => {
//     setName(event.target.value)
//  console.log(event.target.value) ;
//   };

//   const onSubmits = (event)=> {
//     event.preventDefault(); //sumbmit karne par apne aap he refresh ho jata hai page ussi ko prevent karne ke liye yeh funtion call kara hai.
//     setFullName(name);
//   };  
  
 

//   return (
//     <>
//       <form onSubmit={onSubmits}>
//       <h1>Hello {fullName}</h1>
//       <input 
//       type="text" 
//       onChange={inputevent}
//       value={name}
//       >
//       </input>
      
//       <button type="submit">submit</button>
//       </form>
//     </>
//   );
// };

// export default App;


//--------------------------------------------------------------------------------------------------------//

//Ab ek or input add karke usse waise he value lena hai tho


// import react, { useState } from "react";


// const App = () => {
  

//   const [name, setName] = useState("");
//   const [lastname, setLastName] = useState("");//-->yeh add hua hai naya
//   const [fullName,setFullName] = useState();
//   const [lastNameNew,setLastNameNew] = useState();//-->yeh add hua hai naya

//   const inputevent = (event) => {
//     setName(event.target.value)
//  console.log(event.target.value) ;
//   };

//   const onSubmits = (event)=> {
//     event.preventDefault(); //sumbmit karne par apne aap he refresh ho jata hai page ussi ko prevent karne ke liye yeh funtion call kara hai.
//     setFullName(name);
//     setLastNameNew(lastname); //-->yeh add hua hai naya
//   };  

//   //-->yeh add hua hai naya
//   const inputevent2 = (event) => {
//     setLastName(event.target.value)
//  console.log(event.target.value) ;
//   };
  
 

//   return (
//     <>
//       <form onSubmit={onSubmits}>
//       <h1>Hello {fullName} {lastNameNew}</h1>
//       <input 
//       type="text" 
//       onChange={inputevent}
//       value={name}
//       >
//       </input>

//      <br/>

//       <input 
//       type="text" 
//       onChange={inputevent2}
//       value={lastname}
//       >
//       </input>
      
//       <button type="submit">submit</button>
//       </form>
//     </>
//   );
// };

// export default App;

//--------------------------------------------------------------------------------------------------------//


// lecture 36 end here now lecture 37.

//Handling complex multiple input form state in react js

// import react, { useState } from "react";


// const App = () => {
  

//   // const [name, setName] = useState("");
//   // const [lastname, setLastName] = useState("");//-->yeh add hua hai naya
//   // const [fullName,setFullName] = useState();
//   // const [lastNameNew,setLastNameNew] = useState();//-->yeh add hua hai naya

//   //  ab useState mai object bhi pass kar sakte hai

//   const [fullName, setFullName] = useState({
//     fname:'',
//     lname:'',
//   });
//   // console.log(typeof(setFullName))-->o/p--> function
//   // console.log((fullName))-->o/p--> object ---> {fname:dsada ,lname:adasd}
  

//   const inputevent = (event) => {
//     // setName(event.target.value) -->ab eski jarurat he nehi hai.
//  console.log(event.target.value) ;
//  console.log(event.target.name) ;

//  const value = event.target.value;
//  const name = event.target.name;

//  setFullName((preValue)=>{ //yeh ek call back funtion leta hai tho eska usmao prevalue previuos value contain karta hai.prevalue fname and lname bhi return karta hai console karke dekh lo
//   console.log(preValue);

//   if(name ==='fname'){
//     return {
//        fname:value,
//        lname:preValue.lname,
//   }
//   }
//   else  if(name ==='lname'){
//     return {
//        fname:preValue.fname,
//        lname:value,
//   }
//   }

//  })
//   };

//   const onSubmits = (event)=> {
//     event.preventDefault(); //sumbmit karne par apne aap he refresh ho jata hai page ussi ko prevent karne ke liye yeh funtion call kara hai.
//     // setFullName(name);
//     // setLastNameNew(lastname); //-->yeh add hua hai naya
//     alert("form Submitted");
//   };  

// //   //-->yeh add hua hai naya
// //   const inputevent2 = (event) => {
// //     setLastName(event.target.value)
// //  console.log(event.target.value) ;
// //   };
  
 

//   return (
//     <>
//       <form onSubmit={onSubmits}>
//       <h1>Hello {fullName.fname} {fullName.lname} </h1>
//       <input 
//       type="text" 
//       name='fname'
//       onChange={inputevent}
//       value={fullName.fname}
//       >
//       </input>

//      <br/>

//       <input 
//       type="text" 
//       name='lname'    
//       // onChange={inputevent2}
//       onChange={inputevent}
//       value={fullName.lname}
//       >
//       </input>
      
//       <button type="submit">submit</button>
//       </form>
//     </>
//   );
// };

// export default App;


// -------------------------------------------------------------------------------------------------------------

// lecture no 37
// Ab ek challenge hai ki or field esmai add akrna hai 




// ------------------------------------------------------------------------------------------------------------


// lecture no 38
// what does (...) 3 dots does in reactjs
//spread operator bolte hai.
//normal jo javasrcipt mai padha tha na array ke baaki ke saaare element ko consider kar leta hai wahi hai yeh


//--------------------------------------------------------------------------------------------------------------

// lecture n0 39
//Project Making ToDo List application with the help of React JS.

//Notes:- inbuilt elements and tag jo hai wo saare small letter se start hote hai and custom jo hote hai wo humesha capital letter se start hote hai.
