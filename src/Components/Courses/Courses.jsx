import { FaRegBell } from 'react-icons/fa'
import { AiOutlineCalendar } from 'react-icons/ai'
import couser1 from '../../assets/course1.jpeg'
import couser2 from '../../assets/course2.jpeg'
import couser3 from '../../assets/course3.jpeg'
import couser4 from '../../assets/course4.jpeg'
import couser5 from '../../assets/course5.jpeg'
import couser6 from '../../assets/course6.jpeg'
import artroom from '../../assets/artroom.jpeg'
import bgbanner from '../../assets/lastbg.png'


const Courses = () => {
    const datas = [

        {
            img: couser1,
            title: 'Creative Art & Paiting For Kids',
            time: '1:00 pm - 3:00 pm',
            day: 'Monday , Thursday',
            price: 240
        },
        {
            img: couser2,
            title: 'At-Home Food Illustration Painting Course',
            time: '1:00 pm - 3:00 pm',
            day: 'Tuesday , Thursday',
            price: 150
        },
        {
            img: couser3,
            title: 'Young Artists: Spring Courses for Kids and Teens',
            time: '9:00 am - 11:00 am',
            day: 'Tuesday , Thursday',
            price: 200

        },
        {
            img: couser4,
            title: 'How to Make the Easy Pinwheel',
            time: '7:00 am - 9:00 am',
            day: 'Monday , Thursday',
            price: 200

        },
        {
            img: couser5,
            title: 'How To Cut A Four Leaf Clove',
            time: '6:00 am - 9:00 am',
            day: 'Monday , Thursday',
            price: 180
        },
        {
            img: couser6,
            title: 'Watercolor Painting-Easy Abstract Art For Kids',
            time: '6:00 am - 8:00 am',
            day: 'Monday , Friday',
            price: 240
        },
    ]
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgbanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} className='text-center py-72 flex justify-center items-center '>

                <span className='lg:visible md:visible invisible lg:h-full md:h-full h-0 lg:w-full md:w-full w-0 flex justify-center items-center md:ps-40'>
                    <img src={artroom} alt="" className='h-full' />
                </span>
            </div>
            <span className='flex justify-center items-center'>
                <span className='py-6'>
                    <h3 className='text-center'>Real World Partnerships</h3>
                    <p className='text-3xl font-bold text-cetner'>Classes & Workshops</p>
                </span>

            </span>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:px-16 md:px-4 px-2 mt-4' >
                {
                    datas.map((data, i) => <div key={i} className="card w-96  bg-base-100 shadow-2xl rounded-lg">
                        <figure><img src={data?.img} alt={data?.title} className='w-96 h-64 ' /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-2">
                                {data.title}

                            </h2>
                            <p className='flex justify-between gap-1'>
                                <span className='flex'><FaRegBell className=' pr-2 text-xl mt-1 text-sky-500'></FaRegBell> {data?.time}</span>
                                <span className='flex'><AiOutlineCalendar className=' pr-2 text-2xl text-sky-500'></AiOutlineCalendar>{data?.day}</span>
                            </p>
                            <div className="card-actions justify-center">
                                <span className='text-sky-400 text-2xl'>${data?.price}</span><span className='mt-2'>/month</span>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-center py-16'>
                <button className='btn bg-yellow-400 py-2 text-black px-10 font-semibold'>view all courses </button>
            </div>
        </div>
    );
};

export default Courses;