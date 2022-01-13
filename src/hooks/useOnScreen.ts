import { useState, useEffect, MutableRefObject } from 'react';

export function useOnScreen(
    ref: MutableRefObject<HTMLDivElement | null>,
    rootMargin = '0px',
) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const refElement = ref;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            },
        );

        if (refElement.current) {
            observer.observe(refElement.current);
        }

        return () => {
            if (refElement.current) {
                observer.unobserve(refElement.current);
            }
        };
    }, [ref, rootMargin]);

    return isIntersecting;
}
