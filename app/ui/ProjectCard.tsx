import Image from "next/image";

interface ProjectCardProps {
    title: string,
    description: string,
    imageURL: string,
    tech?: Array<string>
    githubURL?:string,
    liveURL?:string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div
            className="rounded-xl h-100 w-400 bg-[linear-gradient(135deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] relative border border-gray-700 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-10 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
            <span className="mb-4 inline-flex items-center justify-center rounded-md bg-gray-900 p-2 shadow-lg">
                <Image
                    src={props.imageURL}
                    alt={`${props.title} Project Image`}
                    width={200}
                    height={100}
                />
            </span>
            <p className="mb-2 font-medium tracking-tight">{props.title}</p>
            <p className="flex text-sm text-slate-400 border break-words">
                {props.description}
            </p>
            <div className='gap-2 inline-flex p-2'>
                {props.tech?.map((tech, index) => (
                    <div key={index} className="text-xs p-1 border border-gray-500 rounded-lg inline-flex">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    )
}