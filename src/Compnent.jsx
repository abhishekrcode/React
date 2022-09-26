import React from 'react';
//Sdata use kar rahe hai tho usko import karna hoga
import Sdata from './Sdata'
//Card use kar rahe hai tho Card ko import karna hoga
import Card from './Cards';

const CardComponent=()=>{
    return (Sdata.map((val)=>{
        return (<>
          <Card 
         key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
       </>);
      })
    );
}

export default CardComponent;