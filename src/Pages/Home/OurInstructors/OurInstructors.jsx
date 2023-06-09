
import { useEffect, useState } from "react";
import InstructorCard from "../Home/InstructorCard/InstructorCard";


const OurInstructors = () => {
    const[instructors, setInstructors]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
        
    },[])
    console.log('this is',instructors)
    return (
        <div>
            <h3 className="text-4xl text-center font-bold my-5">Our Top Instructors</h3>
            <div className="grid md:grid-cols-3 md:ms-3 sm:grid-cols-1 md:w-full w-[90%]  mx-auto">
                {
                    instructors.map(singleInstructor =><InstructorCard key={singleInstructor._id} singleInstructor={singleInstructor}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default OurInstructors;