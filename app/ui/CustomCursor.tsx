import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const handleMouseOver = () => setIsHovering(true);
        const handleMouseOut = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span').forEach(el => {
            el.addEventListener('mouseover', handleMouseOver);
            el.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span').forEach(el => {
                el.removeEventListener('mouseover', handleMouseOver);
                el.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference`}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                width: isHovering ? '5rem' : '2.5rem',
                height: isHovering ? '5rem' : '2.5rem',
                transition: 'width 0.3s, height 0.3s'
            }}
        />
    );
}