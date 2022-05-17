import { Button } from 'antd';
import logo from '../assets/cctv.png'
import hero from '../assets/hero.svg'

export const Home: React.FC = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
            <div className='flex items-center justify-between px-6 py-4'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" width={54} height={54} />
                    <p className='text-2xl text-white font-bold'>CCTV</p>
                </div>
                <div>
                    <Button type="primary" shape="round">Log in</Button>

                </div>
            </div>
            <div className='w-4/12 h-full flex items-center trnasform -translate-y-20 px-6'>
                <div className='bg-white px-10 py-12 rounded-xl w-full'>
                    <h1 className='text-rose-500 text-3xl'>CCTV App</h1>
                    <h2 className='text-gray-700 mt-6 mb-3'>The smart monitoring application </h2>
                    <Button type="primary">Try for free</Button>
                </div>
            </div>
            <div className='absolute w-7/12 bottom-0 right-0'>
                <img src={hero} alt="hero image" />
            </div>
        </div>
    )
}