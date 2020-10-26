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
import { VFlex, Flex, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Media } from 'themes'
import PrevButtonImage from 'images/svg/carousel/arrow-left.svg'
import NextButtonImage from 'images/svg/carousel/arrow-right.svg'

export const PrevButton = ({ enabled, onClick }) => (
    <StyledPrevButton onClick={onClick} disabled={!enabled} aria-label="previous button">
        <img src={PrevButtonImage} alt="Prev Button" />
    </StyledPrevButton>
)

export const NextButton = ({ enabled, onClick }) => (
    <StyledNextButton onClick={onClick} disabled={!enabled} aria-label="next button">
        <img src={NextButtonImage} alt="Next Button" />
    </StyledNextButton>
)

const DotButton = ({ selected, onClick, isMarkets }) =>
    isMarkets ? (
        <StyledDots selected={selected} type="button" onClick={onClick} primary aria-label="dots" />
    ) : (
        <StyledDots selected={selected} type="button" onClick={onClick} aria-label="dots" />
    )

export const Carousel = ({
    children,
    options,
    primary,
    secondary,
    bottomcard_title,
    bottomcardsdata,
    activecardindexes,
    isMarkets,
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
                                {children.map((child, idx) =>
                                    isMarkets ? (
                                        <div key={idx}>{child}</div>
                                    ) : (
                                        <Slide key={idx}>{child}</Slide>
                                    ),
                                )}
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
                                isMarkets={isMarkets}
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
                        <Media greaterThanOrEqual="tablet">
                            <SecondaryDotsWrapper>
                                {scrollSnaps.map((_, index) => (
                                    <DotButton
                                        key={index}
                                        selected={index === selectedIndex}
                                        onClick={() => scrollTo(index)}
                                    />
                                ))}
                            </SecondaryDotsWrapper>
                        </Media>
                    </div>
                    <div>
                        <VFlex>
                            <Text
                                fontSize={'s'}
                                fontWeight={'bold'}
                                textAlign={'center'}
                                mt={{ md: '5xl' }}
                                mb={'m'}
                                ml={{ xl: '25%' }}
                            >
                                {bottomcard_title[selectedIndex]}
                            </Text>
                            <Flex justifyContent={'center'} ml={{ xl: '25%' }}>
                                {bottomcardsdata &&
                                    bottomcardsdata.map((data, index) => (
                                        <BottomCard
                                            selected={activecardindexes[selectedIndex].includes(
                                                index,
                                            )}
                                        >
                                            <Text
                                                fontSize={{ _: 'm', xl: 'xl' }}
                                                fontWeight={'bold'}
                                                mt={{ md: '2xl' }}
                                                mb={{ _: 's', md: 'unset' }}
                                            >
                                                {data.header}
                                            </Text>
                                            <CardContent mb={{ md: 'auto' }}>
                                                {data.content}
                                            </CardContent>

                                            <LearnMore
                                                selected={activecardindexes[selectedIndex].includes(
                                                    index,
                                                )}
                                                href={data.url}
                                            >
                                                {localize('Learn more >')}
                                            </LearnMore>
                                        </BottomCard>
                                    ))}
                            </Flex>
                        </VFlex>
                    </div>
                </div>
            )}
        </div>
    )
}

const Item = ({ children }) => <div>{children}</div>
Carousel.Item = Item
