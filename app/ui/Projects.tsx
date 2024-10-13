import ProjectCard from '@/app/ui/ProjectCard';

export default function Projects() {
    return (
        <>
            <div className='text-3xl'>Projects</div>
            <div className='flex flex-col justify-center items-center gap-8 w-full'>
                <ProjectCard
                    title={'MiniCollection.app'}
                    description={'When I am not programming, I collect miniatures. This is a complete database of over 2000 miniatures where users can manage their collections.'}
                    imageURL={'/public/icons/github.png'}
                    tech={['Typescript', 'Next.js', 'Supabase', 'SanityCMS', 'OAuth']}
                />
                <ProjectCard
                    title={'Askja'}
                    description={'A white label employee performance review platform.'}
                    imageURL={'/public/icons/github.png'}
                    tech={['Typescript', 'React', 'Firebase', 'Cloud Functions', 'OAuth']}
                />
                <ProjectCard
                    title={'Financial Dashboard'}
                    description={'A financial dashboard where you can review last transactions and current'}
                    imageURL={'/public/icons/github.png'}
                    tech={['Typescript', 'Next.js', 'Vercel DB', 'TailwindCSS']}
                />
            </div>
        </>
    )
}