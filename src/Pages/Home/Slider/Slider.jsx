

const Slider = () => {
    return (
        <div>
        <div className="carousel w-full ">
<div id="slide1" className="carousel-item relative w-full">
 <img  src="https://i.ibb.co/37ydS7G/520720-gabrielgurrola.jpg" className="w-1/2" />
  <div className='w-full text-center  bg-black'>
   <div className='mt-20 '>
   <h3 className='text-3xl font-bold '>Music is your World !</h3>
      <p className='descriptiton mt-2'>Don't miss a chance...</p>
   </div>
  </div>
 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   <a href="#slide4" className="btn btn-circle ">❮</a> 
   <a href="#slide2" className="btn btn-circle ">❯</a>
 </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
 <img src="https://i.ibb.co/TgZfLgG/2771fc0b-f974-4b2a-b26e-fe1c4e81b9c3.jpg" className="w-1/2"  />
 <div className='w-full text-center bg-black'>
   <div className='mt-20 '>
   <h3 className=' text-3xl  font-bold'>Start With a Note !</h3>
      <p className='descriptiton'>Awaken Possibility...</p>
   </div>
  </div>
 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   <a href="#slide1" className="btn btn-circle ">❮</a> 
   <a href="#slide3" className="btn btn-circle ">❯</a>
 </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
 <img src="https://i.ibb.co/3z8c5KT/5397402-music-recording-keys-key-board-musicican-playing-musician-keyboard-light-piano-concert-spotl.jpg" className="w-1/2"  />
 <div className='w-full text-center bg-black'>
   <div className='mt-20 '>
   <h3 className=' text-3xl font-bold '>Music is for Everyone !</h3>
      <p className='descriptiton '>Don't miss the chance...</p>
   </div>
  </div>
 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   <a href="#slide2" className="btn btn-circle ">❮</a> 
   <a href="#slide4" className="btn btn-circle ">❯</a>
 </div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
 <img src="https://i.ibb.co/TgSykJ0/240-F-319087423-2h-Ls-Ygopa-XBF3-Kii4l-CKSy-Sqm-Mza-RXj-J.jpg" className="w-1/2"  />
 <div className='w-full text-center bg-black'>
   <div className='mt-20 '>
   <h3 className=' text-3xl font-bold '>Music is the tone of heart !</h3>
      <p className='descriptiton'>Start Learnig with us...</p>
   </div>
  </div>
 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   <a href="#slide3" className="btn btn-circle ">❮</a> 
   <a href="#slide1" className="btn btn-circle ">❯</a>
 </div>
</div>
</div>
     </div>
    );
};

export default Slider;