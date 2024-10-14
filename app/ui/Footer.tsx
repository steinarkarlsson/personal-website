import SocialIcon from '@/app/ui/SocialIcon';

export default function Footer() {
    return <footer className="row-start-3 py-8 flex gap-16 flex-wrap items-center justify-center">
        <SocialIcon title={'Github'} link={'https://github.com/steinarkarlsson'} iconLink={'/icons/github.png'}/>
        <SocialIcon title={'LinkedIn'} link={'https://www.linkedin.com/in/steinar-karlsson-5982b0b7/'} iconLink={'/icons/linkedin.png'}/>
    </footer>
}