
import './PopularClassesCard.css'

const PopularClassesCard = ({ singleclass }) => {
    const {image,class_name,instructor_name,student} = singleclass
  
    return (
        <div className="">
            <div className="card  card-compact md:w-60 w-full my-5 md:ms-5 bg-base-100 shadow-xl">
                <figure><img className="card-image" src={image} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{class_name}</h2>
                    <p>Instructor:<span className='color font-bold'>{instructor_name}</span></p>
                    <p>Number of Students:{student}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-bg-color btn-sm text-white">View Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;