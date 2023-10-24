import { FaMasksTheater } from 'react-icons/fa6';
import { IoIosColorPalette } from 'react-icons/io';
import { PiCertificateBold } from 'react-icons/pi';
import girlImg from '../../assets/smallgirl.png'
const GirlsSection = () => {
    return (
        <div className='lg:flex md:flex'>
            <div className='lg:w-3/5 md:w-3/5 justify-center items-center lg:pt-32'>
                <h3 className='text-center text-xl text-slate-400 mb-2'>What We Stand For</h3>
                <p className='text-center text-3xl font-bold mb-12'>ArtSchool Great</p>
                <p className='text-center lg:px-28 md:px-16 px-6 font-semibold mb-12'>Man face fruit divided seasons herb from herb moveth whose. Domino gathered winged morning, man won’t had fly beginning. Winged have saying behold gathered winged morning, man won’t had fly beginning. Winged have saying behold morning greater void</p>

                <div className='flex justify-between lg:px-44 md:px-16 px-6'  >
                    <div>
                        <IoIosColorPalette className='text-7xl text-pink-600 mb-6'></IoIosColorPalette>
                        <h3 className='text-5xl font-bold mb-3'>750</h3>
                        <p className='text-slate-400'>Courses Held</p>
                    </div>
                    <div>
                        <PiCertificateBold className='text-7xl text-yellow-600 mb-6'></PiCertificateBold>
                        <h3 className='text-5xl font-bold mb-3'>290</h3>
                        <p className='text-slate-400'>Award</p>
                    </div>
                    <div>
                        <FaMasksTheater className='text-7xl text-sky-500 mb-6'></FaMasksTheater>
                        <h3 className='text-5xl font-bold mb-3'>434</h3>
                        <p className='text-slate-400'>Studio Fire</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-2/5 md:w-2/5'>
                <img src={girlImg} alt="" className='lg:h-[90vh] md:h-[40vh]' />
            </div>
        </div>
    );
};

export default GirlsSection;