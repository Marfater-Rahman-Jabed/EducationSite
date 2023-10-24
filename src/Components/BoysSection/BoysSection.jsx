import boys from '../../assets/smallBoy.png'
import color from '../../assets/color.jpeg'
const BoysSection = () => {
    return (
        <div>
            <div className="lg:flex  py-10">
                <div className="lg:w-1/2 lg:visible invisible  lg:z-10 lg:h-full h-0">
                    <img src={boys} alt="" />
                </div>
                <div className="lg:w-1/2 text-center mt-4 lg:mx-10 md:mx-10 mx-3">
                    <h2 className='text-slate-400'>What We Stand For</h2><br />
                    <p className='text-4xl text-black font-semibold'>Making a Difference</p><br /><br />
                    <p className='text-justify text-slate-500 '>Man face fruit divided seasons herb from herb moveth whose. Domino gathered  winged morning, man won’t had fly beginning. Winged have saying behold gathered winged morning, man won’t had fly beginning. Winged have saying  behold morning greater void shall created whose blessed herb light fruitful open  void without itself.</p> <br /><br /><br />

                    <p className='mb-2'>Need Help? Call Us Now</p>
                    <h3 className='text-sky-400'>(+88) 12 345 6789</h3>
                    <br /><br />
                    <button className='btn bg-yellow-400 py-2 text-black px-10 font-semibold'>Apply Now </button>
                </div>
                <div className="lg:invisible lg:h-0 lg:w-0 text-center w-full mt-2 md:px-28  py-8">
                    <img src={boys} alt="" />
                </div>
            </div>
            <img src={color} alt="" className='lg:w-[50vw] w-0 lg:h-[16vh] h-0 lg:ps-64 lg:-mt-36 lg:visible invisible' />
        </div>
    );
};

export default BoysSection;