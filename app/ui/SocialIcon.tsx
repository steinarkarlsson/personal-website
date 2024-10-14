import Image from 'next/image';

export interface IconProps {
    title: string,
    link?: string,
    iconLink: string,
}

export default function SocialIcon(props: IconProps) {
    return <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Image
            aria-hidden
            src={props.iconLink}
            alt={`${props.title} Icon`}
            width={20}
            height={20}
        />
        {props.title}
    </a>
}