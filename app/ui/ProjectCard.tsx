import Image from "next/image";
import SocialIcon from '@/app/ui/SocialIcon';

interface ProjectCardProps {
    title: string,
    description: string,
    imageURL: string,
    tech?: Array<string>
    githubURL: string,
    liveURL?: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div
            className="rounded-xl h-100 w-full max-w-2xl bg-[linear-gradient(135deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] relative border border-gray-700 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-10 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms] overflow-hidden">
            <span className="flex mb-4 items-center justify-center">
                <Image
                    src={props.imageURL}
                    alt={`${props.title} Project Image`}
                    width={600}
                    height={600}
                    className="z-0 rounded-md"
                />
            </span>
            <p className="mb-2 font-medium tracking-tight z-20">{props.title}</p>
            <p className="flex text-sm text-slate-400 break-words z-20">
                {props.description}
            </p>
            <div className='flex flex-wrap justify-center gap-2 pt-2 z-20'>
                {props.tech?.map((tech, index) => (
                    <span key={index} className="text-xs p-1 border border-gray-500 rounded-lg inline-flex">
                        {tech}
                    </span>
                ))}
            </div>
            <div className='flex gap-10 justify-center mt-5'>
                <SocialIcon title={'Github'} iconLink={'/icons/github.png'} link={props.githubURL}/>
                <SocialIcon title={'Live Site'} iconLink={'/icons/internet.svg'} link={props.liveURL}/>
            </div>

        </div>
    )
}