import { useEffect, useState } from "react";
import PopularClassesCard from "../PopularClassesCard/PopularClassesCard";


const PopularClasses = () => {
    const[classes, setClasses]=useState([])
  

    useEffect(()=>{
        fetch(`https://mil-club-server.vercel.app/classes`)
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    console.log(classes)
    return (
        <div>
            <h4 className="text-4xl text-center font-bold my-5">Our Popular Classes</h4>
            <div  className="grid md:grid-cols-3 md:ms-3 sm:grid-cols-1 md:w-full w-[90%]  mx-auto">
             {
               classes.slice(0,6).map(singleclass=><PopularClassesCard key={singleclass._id} singleclass={singleclass}></PopularClassesCard>)
             }
            </div>
        </div>
    );
};

export default PopularClasses;