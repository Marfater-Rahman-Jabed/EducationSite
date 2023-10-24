import two_children from '../../assets/two_children.jpg'
import bgimage from '../../assets/bgimage1.png'
import cross from '../../assets/cross.png'
import lines from '../../assets/lines.png'
import dots from '../../assets/dots.png'
const HeroSection = () => {
    return (
        <div >

            <div className='lg:flex '>
                <div className='lg:w-1/2  lg:mt-32'>
                    <span className='flex justify-end px-2 '>

                        <img src={bgimage} alt="" className='h-16 w-32' />
                    </span><br /><br />
                    <h2 className='font-semibold text-slate-400 flex gap-4 lg:ms-10 md:ms-10'><img src={dots} alt="" className='h-16 ' /><span className='mt-9'>Real World Partnerships</span></h2>
                    <div className='lg:ms-28 md:ms-28 ms-16'>
                        <br />
                        <p className='text-4xl font-bold font-serif'>Bring your artistic talents <br /> to the hearts of your <br /> children</p>
                        <br />
                        <button className='btn bg-yellow-400 py-2 text-black px-8 font-semibold'>Apply Now </button>

                        <span className='flex justify-end '><img src={cross} alt="" /></span>
                    </div>
                    <span><img src={lines} alt="" className='lg:-mt-12 md:-mt-12 w-72' /></span>
                </div>
                <div className='lg:w-1/2 '>
                    <img src={two_children} alt="" className='rounded-3xl lg:h-[110vh] h-[100vh] lg:w-[45vw]  w[100vw]' />
                </div>
            </div>

        </div>
    );
};

export default HeroSection;