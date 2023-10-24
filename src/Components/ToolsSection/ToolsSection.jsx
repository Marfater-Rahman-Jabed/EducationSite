import { FaDraftingCompass, FaPaintBrush, FaPencilRuler, FaCut } from 'react-icons/fa'
import { IoIosColorPalette } from 'react-icons/io'

const ToolsSection = () => {
    return (
        <div className="bg-sky-400 py-16 flex justify-evenly px-16">
            <div>
                <span className='flex justify-center'><FaDraftingCompass className='text-5xl text-white '></FaDraftingCompass></span> <br />
                <h2 className='text-white font-bold text-2xl'>Sketch</h2>
            </div>
            <div className='border-r-2'>

            </div>
            <div>
                <span className='flex justify-center'><FaPaintBrush className='text-5xl text-white'></FaPaintBrush></span><br />
                <h2 className='text-white font-bold text-2xl'>Painting</h2>
            </div>
            <div className='border-r-2'>

            </div>
            <div>
                <span className='flex justify-center'><FaPencilRuler className='text-5xl text-white'></FaPencilRuler>
                </span><br />
                <h2 className='text-white font-bold text-2xl'>Sculpture</h2>
            </div>
            <div className='border-r-2'>

            </div>
            <div>
                <span className='flex justify-center'><FaCut className='text-5xl text-white'></FaCut></span><br />
                <h2 className='text-white font-bold text-2xl'>Drawing</h2>
            </div>
            <div className='border-r-2'>

            </div>
            <div>
                <span className='flex justify-center'><IoIosColorPalette className='text-5xl text-white'></IoIosColorPalette></span><br />
                <h2 className='text-white font-bold text-2xl'>Art & crafts</h2>
            </div>

        </div>
    );
};

export default ToolsSection;