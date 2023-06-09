
import './InstructorCard.css'
const InstructorCard = ({singleInstructor}) => {
    const{ image,name}=singleInstructor
   
    return (
        <div>
            <div className="card edit-card card-compact md:w-60 w-full my-5 md:ms-5 bg-base-100 shadow-xl">
                <figure><img className='img-fluid' src={image} alt="Shoes" /></figure>
                <div className="card-body justify-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions ms-16 ">
                        <button className="btn btn-xs btn-color">view Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;