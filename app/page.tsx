'use client'

import AboutMe from '@/app/ui/AboutMe';
import MyStack from '@/app/ui/MyStack';
import CustomCursor from '@/app/ui/CustomCursor';
import Projects from '@/app/ui/Projects';
import Footer from '@/app/ui/Footer';
import ScrollButton from '@/app/ui/ScrollButton';

export default function Home() {


    return (
        <div className="relative cursor-none bg-gradient-transition">
            <CustomCursor/>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start w-full lg:w-1/3">
                    <AboutMe/>
                    <MyStack/>
                    <Projects/>
                    <ScrollButton/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}