export default function ScrollButton() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return (
        <div className='flex w-full justify-center'>
            <button
                onClick={scrollToTop}
                className=" text-white p-2 rounded-full shadow-lg hover:underline">
                ↑ Back to Top
            </button>
        </div>
    )
}