import ProjectCard from '@/app/ui/ProjectCard';

export default function Projects() {
    return (
        <>
            <h2>Projects</h2>
            <div className='flex flex-col justify-center items-center gap-8 w-full'>
                <ProjectCard
                    title={'MiniCollection.app'}
                    description={'When I am not programming, I collect miniatures. This is a complete database of over 2000 miniatures where users can manage their own collection. This app is getting 1000 visitors/week and increasing since soft launching it in July.'}
                    imageURL={'/projects/minicollection.png'}
                    tech={['Typescript', 'Next.js', 'Supabase', 'SanityCMS', 'OAuth']}
                    liveURL={'https://www.minicollection.app/'}
                    githubURL={'https://github.com/steinarkarlsson/minicollection'}
                />
                <ProjectCard
                    title={'Askja'}
                    description={'A white label employee performance review platform. Create your employees and pre-made KPIs, and the app takes care of the rest. This features a 3 tiered performance review: Self Review -> Manager Review -> HR Review with the ability to request changes any KPI.'}
                    imageURL={'/projects/performus.png'}
                    tech={['Typescript', 'React', 'Firebase', 'Cloud Functions', 'OAuth']}
                    githubURL={'https://github.com/steinarkarlsson/askja'}
                />
                <ProjectCard
                    title={'Financial Dashboard'}
                    description={'A financial dashboard where you can review your latest transactions and learn more about your spending habits. In this app I wanted to explore serving data from Vercel Postgres via SSR.'}
                    imageURL={'/projects/financial-dashboard.png'}
                    tech={['Typescript', 'Next.js', 'Vercel Postgres', 'TailwindCSS']}
                    githubURL={'https://github.com/steinarkarlsson/financial-dashboard'}
                />
            </div>
        </>
    )
}