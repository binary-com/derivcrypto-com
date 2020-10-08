import React, { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import {
    StyledDots,
    DotsWrapper,
    SecondaryDotsWrapper,
    StyledPrevButton,
    StyledNextButton,
    ViewPort,
    ViewPortWrapper,
    Container,
    Slide,
    CardContent,
    BottomCard,
    LearnMore,
} from './carousel-style'
import { Flex, Text } from 'components/elements'
import { localize } from 'components/localization'
import PrevButtonImage from 'images/svg/carousel/arrow-left.svg'
import NextButtonImage from 'images/svg/carousel/arrow-right.svg'

export const PrevButton = ({ enabled, onClick }) => (
    <StyledPrevButton onClick={onClick} disabled={!enabled}>
        <img src={PrevButtonImage} alt="Google" />
    </StyledPrevButton>
)

export const NextButton = ({ enabled, onClick }) => (
    <StyledNextButton onClick={onClick} disabled={!enabled}>
        <img src={NextButtonImage} alt="Google" />
    </StyledNextButton>
)

const DotButton = ({ selected, onClick }) => (
    <StyledDots selected={selected} type="button" onClick={onClick} />
)

export const Carousel = ({
    children,
    options,
    primary,
    secondary,
    bottomcardsdata,
    activecardindexes,
}) => {
    const [emblaRef, embla] = useEmblaCarousel(options)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
    const scrollTo = useCallback(index => embla && embla.scrollTo(index), [embla])

    const onSelect = useCallback(() => {
        if (!embla) return
        setPrevBtnEnabled(embla.canScrollPrev())
        setNextBtnEnabled(embla.canScrollNext())
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
            {primary && (
                <div>
                    <ViewPortWrapper>
                        <ViewPort ref={emblaRef}>
                            <Container>
                                {children.map((child, idx) => (
                                    <Slide key={idx}>{child}</Slide>
                                ))}
                            </Container>
                        </ViewPort>
                        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                    </ViewPortWrapper>
                    <DotsWrapper>
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                selected={index === selectedIndex}
                                onClick={() => scrollTo(index)}
                            />
                        ))}
                    </DotsWrapper>
                </div>
            )}
            {secondary && (
                <div>
                    <div>
                        <ViewPortWrapper>
                            <ViewPort ref={emblaRef}>
                                <Container>
                                    {children.map((child, idx) => (
                                        <Slide key={idx}>{child}</Slide>
                                    ))}
                                </Container>
                            </ViewPort>
                        </ViewPortWrapper>
                        <SecondaryDotsWrapper>
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    selected={index === selectedIndex}
                                    onClick={() => scrollTo(index)}
                                />
                            ))}
                        </SecondaryDotsWrapper>
                    </div>
                    <div>
                        <Flex>
                            {bottomcardsdata &&
                                bottomcardsdata.map((data, index) => (
                                    <BottomCard
                                        selected={activecardindexes[selectedIndex].includes(index)}
                                    >
                                        <Text fontSize={{ _: 'm' }} fontWeight={'bold'}>
                                            {data.header}
                                        </Text>
                                        <CardContent>{data.content}</CardContent>

                                        <LearnMore href="https://deriv.com">
                                            {localize('Learn more >')}
                                        </LearnMore>
                                    </BottomCard>
                                ))}
                        </Flex>
                    </div>
                </div>
            )}
        </div>
    )
}

const Item = ({ children }) => <div>{children}</div>
Carousel.Item = Item
