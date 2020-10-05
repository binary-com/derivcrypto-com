import React, { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import { ReviewsButton, MarketsButton, ButtonWrapper } from './carousel-style'

const DotButton = ({ selected, onClick, isMarkets }) =>
    isMarkets ? (
        <MarketsButton selected={selected} type="button" onClick={onClick} />
    ) : (
        <ReviewsButton selected={selected} type="button" onClick={onClick} />
    )

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

export const Carousel = ({ children, options, isMarkets }) => {
    const [emblaRef, embla] = useEmblaCarousel(options)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const scrollTo = useCallback(index => embla && embla.scrollTo(index), [embla])

    const onSelect = useCallback(() => {
        if (!embla) return
        setSelectedIndex(embla.selectedScrollSnap())
    }, [embla, setSelectedIndex])

    useEffect(() => {
        if (!embla) return
        onSelect()
        setScrollSnaps(embla.scrollSnapList())
        embla.on('select', onSelect)
    }, [embla, setScrollSnaps, onSelect])

    return (
        <div>
            <div style={viewportCss} ref={emblaRef}>
                <div style={containerCss}>
                    {children.map((child, idx) => (
                        <div key={idx} style={isMarkets ? null : slideCss}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <ButtonWrapper>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                        isMarkets={isMarkets}
                    />
                ))}
            </ButtonWrapper>
        </div>
    )
}

const Item = ({ children }) => <div>{children}</div>
Carousel.Item = Item
