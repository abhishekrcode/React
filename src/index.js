//chalenge 1.

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   //  <React.Fragment>
//   //kya dalna hai
//   //kaha daaalna hai

//   <>
//     <h1>This the my Favourite play list on Netflix</h1>
//     <p>Here the list of my fav 5 netflix series</p>
//     <ol>
//       <li>Extra Curricular</li>
//       <li>My hello Love</li>
//       <li>My first Two Love</li>
//       <li>Mr Robot</li>
//       <li>Money Heist</li>
//     </ol>
//   </>,
//   // </React.Fragment>
//   document.getElementById("root")
// );

//chalenge end here

//-----------------------------------------------------------------------------------//

//Notes

//1.Java Script file ke andar html file use kr paa rhe hai with the help of react jisko jsx bolte hai and ess jsx ke andar agar hume JavaScript use karni hai tho hum use karenge   { }   yeh curly braces bus.

//2. hume  " <> </> "  use karna hai multiple html element use krni hai tho baaki bhi hote hai jaise [ , , ,] or <div></div> --->esmai ek dikkat hai ki ek extra div banaleta hai or <React.Fragment></React.Fragment> == <> </> -->same he hote hai.---> esko sugar form kehte hai.

//3. import react ke baare mai starting mai bataya tha video se dekh lena agar kuch jaana ho tho

//4.ReactDom ke baare mai bhi kuch jaan na ho tho starting ke video mai bataya hua hai waha se dekh lena.

//5.agar hume koi expression likhna hai tho simple  { }--> eske andar likh denge or wo compute ho jaayega. like this--->    {2+3}====> 5   curly braces ke andar multiple expression use kar sakte hai,, esmai expression likh sakte hai but statement nehi likh sakte hai ---if,for yeh sab use nehi kar skte hai jo number ke form mai kuch output deta hai bus wahi use kar skte hai jaise ki j=koi expression wgra.

//6. template litrals in Es7 ke upar ek video bnaya hua hai usko dekhna hai yaad se.

//7.2 1.constant ko ek sath likhna hai tho concate krskte hai { fname + lname} but ismai space nehi aayega tho uske liye  { fname + " "+ lname} aise likh denge
// 2.{ } { } dusra tarika hai ki do alag alag mai likh do.
//3. by using template litrals--->imp-->   `  `
// {`${fname} ${lname}`} or
//<h1> {`My name is ${fname} ${lname}`}</h1>

// import React from "react";
// import ReactDOM from "react-dom";

// const fname="Abhishek";
// const lname="Raj";

// ReactDOM.render(
// <>
// <h1> {`My name is ${fname} ${lname}`}</h1>
// <p>my lucky number is {2+3+8}</p>
// </>
// ,document.getElementById('root')

// );

//-----------------------------------------------------------------------------------//

//chalenge Number 2.

//  import react from "react";
// import ReactDOM from "react-dom";

// const name="Abhishek Raj"
// let now = new Date().toLocaleDateString();
// let currDate=new Date().toLocaleTimeString();

// ReactDOM.render(
// <>
// <h1>{`Hello,My name is ${name}`}</h1>
// <p>{`todays Date is : ${now}`}</p>
// <p>{`Current time is : ${currDate}`}</p>

// </>
//   ,document.getElementById('root')
// );

//chalenge 2 mai ki hui cheezo ka explaination--->esmai humne current date and current time nikala hai  "let now = new Date().toLocaleDateString();"<-------  yeh use kiya hai current time nikalne ke liye   and   yeh use kya hai current date nikalne ke liye-----> "let currDate=new Date().toLocaleTimeString();"

//chalenge 2------> end here<---------------

//-----------------------------------------------------------------------------------//

//challenge 3. --->esmai hum dekhenge ki kaise css ke style ko sidha jsx mai use kr skte hai object banakar

// import react from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// const name="Abhishek";
// const image1="https://picsum.photos/301/300";
// const image2="https://picsum.photos/302/300";
// const image3="https://picsum.photos/303/300";
// const image4="https://picsum.photos/304/300";

// const heading ={
//   fontFamily:" 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
//   fontStyle: "italic",
//   color: "brown",
//   textAlign: "center",
//   marginBottom:" 50px",
//   marginTop: "50px",
//   fontWeight: "bold",
//   fontFamily:" 'Blaka', cursive",
// fontFamily: "'League Gothic', sans-serif",
// textShadow:" 0px 2px 4px black"
// }

// ReactDOM.render(
//  <>
// <h1 style={heading}>My name is {name}</h1>
// <div className="image-body">
// <img src={image1} alt="Random Image"/>
// <img src={image2} alt="Random Image"/>
// <img src={image3} alt="Random Image"/>
// <img src={image4} alt="Random Image"/>
// </div>
//  </>
// ,document.getElementById('root')

// );

//-----------------------------------------------------------------------------------//

//chalenge 4. Good Morning Project

// import react from "react";
// import ReactDOM from "react-dom";
// import "./index.css"

// const currTime= new Date().getHours();
// let greeting="";
// const css={};
// if(currTime >=0 && currTime<12){
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

// ReactDOM.render(
// <>
// <h1 >Hello Sir, <span style={css}>{greeting}</span> </h1>
// </>
//   ,document.getElementById('root')
// );

//challege 4 ends here
//-----------------------------------------------------------------------------------//

//Now we we will learn about components-->1st Part

// import react from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"));

//-----------------------------------------------------------------------------------//

//chalenge to make component of good morning challenge

// import react from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById('root')
// );

//-----------------------------------------------------------------------------------//

// // import and export  Explaination

// import react from 'react';
// import ReactDOM from 'react-dom';
// // import coder from "./App";
// //yaha par App se import kiya hai coder ko tho yaha par koi bhi naam de sakte hai coder ki jagah kuch bhi likh sakte hai bhale he App.js file mai coder he export kiya ho lekin yaha kuch or bhi naam likh skkte hai jaise kyoki default hai.

// import nayaNaam,{favProg,myName} from "./App";
// // nayaNaam--->yeh sirf default waale ki liye hota hai wo apne aap he default le leta hai

// //sab App ke components ko ek he baar mai import kar skte hai -->import * as (kuchbhinaam) from "./App"; <---
// //or eske componet ko use krne ke liye----> {kuchbhinaam.favProg } or {kuchbhinaam.myName() } or {kuchbhinaam.default}     etc    <----- but yeh log use nehi krte confusion ho jaati hai esliye pehle waala he tarika acha hai.

//                                         //   ReactDOM.render(
//                                         //   <>
//                                         //   <h1>{nayaNaam}</h1>
//                                         //   <h2>{favProg}</h2>
//                                         //   <h2>{myName()}</h2>

//                                         //   </>
//                                         //   ,document.getElementById('root')
//                                         //   );

// //-----------------------------------------------------------------------------------//

// //challenge ---> to make calculator //

// //steps:-
// //1.ek calc.jsx bana lo usmai saare add sub mul div ke funtion likh kar export karke App mia import krke umai jsx ka file return kara do ho jaayega.

// import react from "react";
// import ReactDOM from "react-dom";
// import {App} from "./App";

// ReactDOM.render( <App />,document.getElementById('root')
// );

// //-----------------------------------------------------------------------------------//

//Note:- Array and map method ke baare mai --->

// const older = ['Abhishek','King','Raj'];
// console.log(older[0]);
// console.log(older[1]);
// console.log(older[2]);

// const newer = older.map(function(value,index,arr){ //funtion ke argument mai pehla tho older ka ek ek karke value leka jaise Abhishek , fir king and then Raj. or uske baad index jo hai wo index batayega respectivly and arr ko likha hai wo basically batata hai ki kaun se arr ke sath kaam kar rahe hai matlab agar arr ko console karke dekhoge tho older array print ho jaayega 3 baar kroki 3 naam hai na older array mai or return mai hum kuch bhi add kr sakte hai or haan ek or cheez hai ki yeh ek khud ka array create karta hai original array mai kuch change nehi karta agar hum kuch manupulation kar rhe hai older values ke sath. jaise return value + 'Super';
//     return value +" "+ 'Super';
// });
// console.log(newer); //ab ek he baar console kiya hai saaare element print ho gaya array ka.

// aise bhi kar sakte hai na back tiks lagakar yaad ho tho-----> return `My name is ${value.name} and my age is ${age}`--->esmai object of array given hoga bus.

//or suppose esko html page par show karana hota hai tho kya karte hai simple
//document.getelementById('id jo html mai diya hoga ').innerHtml=newer;

//---------------------------------------------------------------------------------------//

//props:-

// import react from "react";
// import ReactDOM from "react-dom";

// function Card(){
//     return <>
//     <div class="cards">
//       <div class="card">
//         <img src=" https://raw.githubusercontent.com//codeforcrack-kalai sample-data-netflix-api-json/main/images/img_1.png"
//         alt="movieimage" class="card__img" />
//         <div class="card__info">
//           <span class="card__category">A Netflix Original Series</span>
//           <h3 class="card__title">DARK</h3>
//           <a href="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4" target="_blank">
//             <button>Watch Now</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   </>
// }

// ReactDOM.render(<>

// <Card />

// </>,document.getElementById("root")
// );

//ab aise hum bht baar Card likh kar use kar sakte hai isko but esmai ek problem hai ki ek he data baar baar aayega tho esmai alag alag data daalne ke liye kya kaarenge dekho so tho yeh jo power hume milta hai ussi ko kehte hai props short form og properties like input tag use karte ahi tho usmai bht saare uske properties hote hai jaise type kya hai href kya hai ussi tarike se hum apna khud ka props bana sakte hai jaise humne ek tag banaya Card naam ka and remember Card jaisa function jab bhi banaayenge tho uska first latter capital hoga. So humne Card banaliya ab uska property khud he set kar sakte hai.  


//so ab khud ka custom attributes bana sakte hai like this 

// import react from "react";
// import ReactDOM from "react-dom";

// function Card(props){
//     // console.log(props);
//     return <>
//     <div className="cards">
//       <div className="card">
//         <img src={props.imgsrc}
//         alt="movieimage" className="card__img"/>
//         <div className="card__info">
//           <span className="card__category">{props.title}</span>
//           <h3 className="card__title">{props.sname}</h3>
//           <a href={props.link} target="_blank">
//             <button>Watch Now</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   </>
// }

// ReactDOM.render(<>

// <Card 
//     imgsrc="https://www.bing.com/images/search?view=detailV2&ccid=5uG%2bSqxL&id=2A4B8F6F58447923046DB239100AF67AD9799F22&thid=OIP.5uG-SqxLLeH1sMvYVEjX3AHaJ4&mediaurl=https%3a%2f%2fwww.fonewalls.com%2fwp-content%2fuploads%2f2020%2f02%2fiPad-Wallpaper-HD-023-1535x2048.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e6e1be4aac4b2de1f5b0cbd85448d7dc%3frik%3dIp952Xr2ChA5sg%26pid%3dImgRaw%26r%3d0&exph=2048&expw=1535&q=wallpaper&simid=608048952965552691&FORM=IRPRST&ck=D794179F7434E8EF9B5881BE1AA7A748&selectedIndex=0&ajaxhist=0&ajaxserp=0" 
//     title="A Netflix Original Series"
//     sname="Dark"
//     link="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4"
// />
// <Card
//   imgsrc="https://www.bing.com/images/search?view=detailV2&ccid=5uG%2bSqxL&id=2A4B8F6F58447923046DB239100AF67AD9799F22&thid=OIP.5uG-SqxLLeH1sMvYVEjX3AHaJ4&mediaurl=https%3a%2f%2fwww.fonewalls.com%2fwp-content%2fuploads%2f2020%2f02%2fiPad-Wallpaper-HD-023-1535x2048.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e6e1be4aac4b2de1f5b0cbd85448d7dc%3frik%3dIp952Xr2ChA5sg%26pid%3dImgRaw%26r%3d0&exph=2048&expw=1535&q=wallpaper&simid=608048952965552691&FORM=IRPRST&ck=D794179F7434E8EF9B5881BE1AA7A748&selectedIndex=0&ajaxhist=0&ajaxserp=0" 
//     title="A Netflix Original Series"
//     sname="Dark"
//     link="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4"
// />
// <Card
//   imgsrc="https://www.bing.com/images/search?view=detailV2&ccid=5uG%2bSqxL&id=2A4B8F6F58447923046DB239100AF67AD9799F22&thid=OIP.5uG-SqxLLeH1sMvYVEjX3AHaJ4&mediaurl=https%3a%2f%2fwww.fonewalls.com%2fwp-content%2fuploads%2f2020%2f02%2fiPad-Wallpaper-HD-023-1535x2048.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e6e1be4aac4b2de1f5b0cbd85448d7dc%3frik%3dIp952Xr2ChA5sg%26pid%3dImgRaw%26r%3d0&exph=2048&expw=1535&q=wallpaper&simid=608048952965552691&FORM=IRPRST&ck=D794179F7434E8EF9B5881BE1AA7A748&selectedIndex=0&ajaxhist=0&ajaxserp=0" 
//     title="A Netflix Original Series"
//     sname="Dark"
//     link="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4"
// />
// <Card
//   imgsrc="https://www.bing.com/images/search?view=detailV2&ccid=5uG%2bSqxL&id=2A4B8F6F58447923046DB239100AF67AD9799F22&thid=OIP.5uG-SqxLLeH1sMvYVEjX3AHaJ4&mediaurl=https%3a%2f%2fwww.fonewalls.com%2fwp-content%2fuploads%2f2020%2f02%2fiPad-Wallpaper-HD-023-1535x2048.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e6e1be4aac4b2de1f5b0cbd85448d7dc%3frik%3dIp952Xr2ChA5sg%26pid%3dImgRaw%26r%3d0&exph=2048&expw=1535&q=wallpaper&simid=608048952965552691&FORM=IRPRST&ck=D794179F7434E8EF9B5881BE1AA7A748&selectedIndex=0&ajaxhist=0&ajaxserp=0" 
//     title="A Netflix Original Series"
//     sname="Dark"
//     link="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4"
// />

// </>,document.getElementById("root")
// );


//ab yaha par apna khud ka attribute tho bana liya lekin abhi kuch show nehi ho raha hai tho uske liye kya karna hoga ? uske liye humne jo upar funtion banaya hai usmai kuch pass karna hoga na matlab kuch bhi pops pass kar jo waise kuch bhi likh sakte hai . or uske baad props ek object ke throgh argument mai pass ho rha hai tho wo saaare attribute contain karega jo humne baanaye hai Card ke liye esko hum console.log karke dekha sakte hai.Line no.284 par dekho kiya hai console.


//ab esko or chhota karne ke liye ek Cards naam ka jsx file bana lenge and usmai wahi par funtion likhenge or uppar wala sara part chhota ho jaayega like this.


// import react from "react";
// import ReactDOM from "react-dom";
// // import {Image} from './App.js';
// import Card from './Cards.jsx';



// ReactDOM.render(<>
// <h1>List of 5 Netrflix Series in 2022 </h1>
// <Card 
//     imgsrc="https://wallpapercave.com/uwp/uwp2605750.jpeg" 
//     title="A Netflix Original Series"
//     sname="Dark"
//     link="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4"
// />
// <Card
//   imgsrc="https://wallpapercave.com/uwp/uwp2605750.jpeg" 
//     title="A Netflix Original Series"
//     sname="Dark"
//     link="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4"
// />
// <Card
//   imgsrc="https://wallpapercave.com/uwp/uwp2605750.jpeg" 
//     title="A Netflix Original Series"
//     sname="Dark"
//     link="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4"
// />
// <Card
//   imgsrc="https://wallpapercave.com/uwp/uwp2605750.jpeg" 
//     title="A Netflix Original Series"
//     sname="Dark"
//     link="https://raw.githubusercontent.com/codeforcrack-kalai/sample-data-netflix-api-json/main/videos/video_1.mp4"
// />

// </>,document.getElementById("root")
// );









// ab esko or chota karne ke liye array or object Sdata se mapping kara akte hai .

// import react from "react";
// import ReactDOM from "react-dom";
// // import {Image} from './App.js';
// import Card from './Cards.jsx';
// import Sdata from "./Sdata";


// ReactDOM.render(<>
// <h1>List of 5 Netrflix Series in 2022 </h1>
// <Card 
//     imgsrc={Sdata[0].imgsrc}
//     title={Sdata[0].title}
//     sname={Sdata[0].sname}
//     link={Sdata[0].link}
// />
// <Card
//    imgsrc={Sdata[1].imgsrc}
//     title={Sdata[1].title}
//     sname={Sdata[1].sname}
//     link={Sdata[1].link}
// />
// <Card
//    imgsrc={Sdata[2].imgsrc}
//     title={Sdata[2].title}
//     sname={Sdata[2].sname}
//     link={Sdata[2].link}
// />
// <Card
//    imgsrc={Sdata[3].imgsrc}
//     title={Sdata[3].title}
//     sname={Sdata[3].sname}
//     link={Sdata[3].link}
// />



// </,document.getElementById>,document.getElementById("root")
// );




//ab esmai map use krke or chhhota kar denge aise 


// import react from "react";
// import ReactDOM from "react-dom";
// // import {Image} from './App.js';
// import Card from './Cards.jsx';
// import Sdata from "./Sdata";
// import App from "./App.js"


// // function ncard(val){
// //   return <
// //     Card 
// //    key={val.id}
// //   imgsrc={val.imgsrc}
// //   title={val.title}
// //   sname={val.sname}
// //   link={val.link}
// // />
// // }


// ReactDOM.render(<App/>,document.getElementById("root")
// );

// //Remember map method require unique key.Keys are necessary to improve Performance of react App.


// //esmai na ek error dikha raha hoga ki every child should have unique key property.so uske liye Sdata mai ek new prop add kar denge id naam ka jo unique hoga.


//--------------------------------------------------------------------------------------------------------------------------//


//Hooks

import react from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>,document.getElementById('root')
);