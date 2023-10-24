import boys from '../../assets/smallBoy.png'
import color from '../../assets/color.jpeg'
const BoysSection = () => {
    return (
        <div>
            <div className="flex py-10">
                <div className="w-1/2 z-10">
                    <img src={boys} alt="" />
                </div>
                <div className="w-1/2 text-center mt-4 me-20">
                    <h2 className='text-slate-400'>What We Stand For</h2><br />
                    <p className='text-4xl text-black font-semibold'>Making a Difference</p><br /><br />
                    <p className='text-center text-slate-500 '>Man face fruit divided seasons herb from herb moveth whose. Domino gathered <br /> winged morning, man won’t had fly beginning. Winged have saying behold <br />gathered winged morning, man won’t had fly beginning. Winged have saying <br /> behold morning greater void shall created whose blessed herb light fruitful open <br /> void without itself.</p> <br /><br /><br />

                    <p className='mb-2'>Need Help? Call Us Now</p>
                    <h3 className='text-sky-400'>(+88) 12 345 6789</h3>
                    <br /><br />
                    <button className='btn bg-yellow-400 py-2 text-black px-10 font-semibold'>Apply Now </button>
                </div>
            </div>
            <img src={color} alt="" className='w-[50vw] h-[16vh] ps-64 -mt-36' />
        </div>
    );
};

export default BoysSection;