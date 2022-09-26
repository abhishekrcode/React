import React from 'react';
//Sdata use kar rahe hai tho usko import karna hoga
import Sdata from './Sdata'
//Card use kar rahe hai tho Card ko import karna hoga
import Card from './Cards';

const NetflixComponent=()=>{
    return (
        <
        Card 
        key={Sdata[0].id}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
        />
        );
};

export default NetflixComponent;