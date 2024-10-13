'use client'

import Footer from '@/app/ui/Footer';
import Hero from '@/app/ui/Hero';
import Skills from '@/app/ui/Skills';
import CustomCursor from '@/app/ui/CustomCursor';

export default function Home() {
    return (
        <div className="relative cursor-none">
            <CustomCursor/>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full lg:w-1/3">
                    <Hero/>
                    <Skills/>
                    {/*<Projects/>*/}
                </main>
                <Footer/>
            </div>
        </div>
    );
}