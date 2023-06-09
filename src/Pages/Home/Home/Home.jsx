
import Instruments from "../Instruments/Instruments";
import OurInstructors from "../OurInstructors/OurInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
          
            <Slider></Slider>
            <Instruments></Instruments>
            <PopularClasses></PopularClasses>
            <OurInstructors></OurInstructors>
        </div>
    );
};

export default Home;