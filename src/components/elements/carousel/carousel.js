import React, { useEffect } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'

const viewportCss = {
    overflow: 'hidden',
}
const containerCss = {
    display: 'flex',
}
const slideCss = {
    position: 'relative',
    minWidth: '100%',
}

export const Carousel = ({ children }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }
    }, [emblaApi])

    return (
        <div style={viewportCss} ref={emblaRef}>
            <div style={containerCss}>
                {children.map((child, idx) => (
                    <div key={idx} style={slideCss}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}

const Item = ({ children }) => <div>{children}</div>
Carousel.Item = Item
