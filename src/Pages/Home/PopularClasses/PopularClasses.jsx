import { useEffect, useState } from "react";
import PopularClassesCard from "../PopularClassesCard/PopularClassesCard";


const PopularClasses = () => {
    const[classes, setClasses]=useState([])
    const [useNumber, setUseNumber]=useState(1)

    useEffect(()=>{
        fetch(`http://localhost:5000/classes?useNumber=${useNumber}`)
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[useNumber])
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