

const Instruments = () => {
    return (
        <div className="my-8">
            <h4 className="text-center mt-8 mb-3 md:text-3xl sm:text-1xl font-bold">Musical Instruments</h4>
            <div className="grid md:grid-cols-4 md:ms-3 sm:grid-cols-1 md:w-full w-[90%]  mx-auto">

                <div className="card  md:w-60 w-full my-2  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> <img src="https://i.ibb.co/b7cf05Z/piano.png" alt="" /> Piano</h2>
                    <p>It is a musical instrument played using a keyboard.</p>
                </div>
                </div>

                <div className="card md:w-60 w-full my-2  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> <img src="https://i.ibb.co/4W00kNH/guiter.png" alt="" /> Guitar</h2>
                    <p>The guitar is classified as a string instrument.</p>
                </div>
                </div>

                <div className="card md:w-60 w-full my-2  bg-base-100 shadow-xl">
                <div className="card-body">  
                    <h2 className="card-title"><img src="https://i.ibb.co/N1mhkz8/voice.png" alt="" /> Voice</h2>
                    <p>It is a type of music performed by one or more singers.</p>
                </div>
                </div>

                <div className="card md:w-60 w-full my-2  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> <img src="https://i.ibb.co/bdpY1HX/Drums.png" alt="" /> Drums</h2>
                    <p>Can play by striking with the hand or two sticks.</p>
                </div>
                </div>

                <div className="card md:w-60 w-full my-2  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><img src="https://i.ibb.co/kqVQX7p/violin.png" alt="" /> Violin</h2>
                    <p>IThe violin has four strings tuned in perfect fifths.</p>
                </div>
                </div>

                <div className="card md:w-60 w-full my-2  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><img src="https://i.ibb.co/VHQQ6d1/cello.png" alt="" /> Cello</h2>
                    <p>The cello is used as a solo musical instrument.</p>
                </div>
                </div>

                <div className="card md:w-60 w-full my-2  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><img src="https://i.ibb.co/VmWwxWn/bass.png" alt="" /> Double Bass</h2>
                    <p>The lowest-pitched bowed string instrument.</p>
                </div>
                </div>

                <div className="card md:w-60 w-full my-2  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><img src="https://i.ibb.co/CHXTrKm/saxophone.png" alt="" /> Saxophone</h2>
                    <p>The saxophone is a woodwind instrument.</p>
                </div>
                </div>
            


            </div>
        </div>
    );
};

export default Instruments;