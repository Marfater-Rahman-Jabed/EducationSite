import { FaDraftingCompass, FaPaintBrush, FaPencilRuler, FaCut } from 'react-icons/fa'
import { IoIosColorPalette } from 'react-icons/io'

const ToolsSection = () => {
    return (
        <div className="bg-sky-400 py-16 grid lg:grid-cols-5 grid-cols-2 lg:px-16 lg:-mt-0 -mt-20 ">
            <div>
                <span className='flex justify-center'><FaDraftingCompass className='text-5xl text-white '></FaDraftingCompass></span> <br />
                <h2 className='text-white font-bold text-2xl text-center mb-4'>Sketch</h2>
                <div className='lg:border-r-2 lg:visible invisible'>

                </div>
            </div>

            <div>
                <span className='flex justify-center'><FaPaintBrush className='text-5xl text-white'></FaPaintBrush></span><br />
                <h2 className='text-white font-bold text-2xl text-center mb-4'>Painting</h2>
                <div className='lg:border-r-2 lg:visible invisible'>

                </div>
            </div>

            <div>
                <span className='flex justify-center'><FaPencilRuler className='text-5xl text-white'></FaPencilRuler>
                </span><br />
                <h2 className='text-white font-bold text-2xl text-center mb-4'>Sculpture</h2>
                <div className='lg:border-r-2 lg:visible invisible'>

                </div>
            </div>

            <div>
                <span className='flex justify-center'><FaCut className='text-5xl text-white'></FaCut></span><br />
                <h2 className='text-white font-bold text-2xl text-center mb-4'>Drawing</h2>
                <div className='lg:border-r-2 lg:visible invisible'>

                </div>
            </div>

            <div>
                <span className='flex justify-center'><IoIosColorPalette className='text-5xl text-white'></IoIosColorPalette></span><br />
                <h2 className='text-white font-bold text-2xl text-center mb-4'>Art & crafts</h2>
            </div>

        </div>
    );
};

export default ToolsSection;