import Image from 'next/image'
import Footer from '@/app/ui/Footer';

export default function AboutMe() {
    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <div>
                    <h1>Steinar Karlsson</h1>
                    <Footer/>
                </div>

                <Image
                    src={'/profile.png'}
                    width={200}
                    height={200}
                    alt={'Steinar Karlsson'}
                    className="z-0 rounded-full"
                />
            </div>
            <div className='flex pt-10'>
                <p>I am a Full Stack Software Engineer and a technology enthusiast based in New Zealand. My background
                    is in
                    Software, Production Engineering, Embedded Systems and Project Management.</p>
            </div>
        </div>

    )
}