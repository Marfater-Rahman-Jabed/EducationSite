import two_children from '../../assets/two_children.jpg'
import bgimage from '../../assets/bgimage1.png'
import cross from '../../assets/cross.png'
import lines from '../../assets/lines.png'
import dots from '../../assets/dots.png'
const HeroSection = () => {
    return (
        <div >
            {/* <div className='lg:-mb-52 '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fillOpacity="1" d="M0,224L34.3,229.3C68.6,235,137,245,206,240C274.3,235,343,213,411,170.7C480,128,549,64,617,53.3C685.7,43,754,85,823,85.3C891.4,85,960,43,1029,42.7C1097.1,43,1166,85,1234,96C1302.9,107,1371,85,1406,74.7L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
            </div> */}
            <div className='lg:flex '>
                <div className='lg:w-1/2  mt-32'>
                    <span className='flex justify-end px-2 '>

                        <img src={bgimage} alt="" className='h-16 w-32' />
                    </span><br /><br />
                    <h2 className='font-semibold text-slate-400 flex gap-4 ms-10'><img src={dots} alt="" className='h-16 ' /><span className='mt-9'>Real World Partnerships</span></h2>
                    <div className='ms-28'>
                        <br />
                        <p className='text-4xl font-bold font-serif'>Bring your artistic talents <br /> to the hearts of your <br /> children</p>
                        <br />
                        <button className='btn bg-yellow-400 text-black px-8 font-semibold'>Apply Now </button>

                        <span className='flex justify-end '><img src={cross} alt="" /></span>
                    </div>
                    <span><img src={lines} alt="" className='-mt-12 w-72' /></span>
                </div>
                <div className='lg:w-1/2 '>
                    <img src={two_children} alt="" className='rounded-3xl h-[110vh] w-[90vh]' />
                </div>
            </div>

        </div>
    );
};

export default HeroSection;