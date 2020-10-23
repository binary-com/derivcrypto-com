import React from 'react'
import { Formik, Form, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import { useSnackbar } from 'react-simple-snackbar'
import { StyledInput, StyledText, LogoWrapper, StyledImage, HeroContainer } from './_home-style'
import { Media } from 'themes'
import Login from 'common/login'
import { WhiteText, Button, Flex, NextGenImage, Text, Background } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { BinarySocketBase } from 'websocket/socket_base'
import TrafficSource from 'common/traffic-source'
import { CookieStorage, LocalStore } from 'common/storage'
import { snackbar_options } from 'common/utility'
import { useMounted } from 'hooks'
import FacebookLogo from 'images/svg/home/facebook.svg'
import GoogleLogo from 'images/svg/home/google.svg'

const query = graphql`
    query {
        hero_background: file(relativePath: { eq: "home/hero-background.png" }) {
            ...fadeIn
        }
        hero_desktop: file(relativePath: { eq: "home/desktop/hero-image.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 688, height: 382) {
                    fallback: base64
                    width
                    height
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
        hero_mobile: file(relativePath: { eq: "home/mobile/hero-image.png" }) {
            ...mobileFadeIn
        }
    }
`

export const Hero = () => {
    const data = useStaticQuery(query)
    const [is_mounted] = useMounted()
    const [openSnackbar] = useSnackbar(snackbar_options)

    const handleValidation = values => {
        const errors = {}
        const email_regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/

        if (!values.email) {
            errors.email = <Localize translate_text="Email is required" />
        } else if (!email_regex.test(values.email)) {
            errors.email = <Localize translate_text="Invalid email address" />
        }

        return errors
    }

    const getVerifyEmailRequest = email => {
        const utm_data = TrafficSource.getData()
        const affiliate_cookie = new CookieStorage('affiliate_tracking')
        const affiliate_token = String(affiliate_cookie.getValue())
        const signup_device_cookie = new CookieStorage('signup_device')
        const signup_device = signup_device_cookie.get('signup_device')
        const date_first_contact_cookie = new CookieStorage('date_first_contact')
        const date_first_contact = date_first_contact_cookie.get('date_first_contact')
        const gclid = LocalStore.get('gclid')

        return {
            verify_email: email,
            type: 'account_opening',
            url_parameters: {
                utm_source: TrafficSource.getSource(utm_data),
                ...(utm_data.utm_campaign && {
                    utm_medium: utm_data.utm_medium,
                    utm_campaign: utm_data.utm_campaign,
                }),
                ...(affiliate_token && { affiliate_token: affiliate_token }),
                ...(gclid && { gclid_url: gclid }),
                ...(signup_device && { signup_device: signup_device }),
                ...(date_first_contact && {
                    date_first_contact: date_first_contact,
                }),
            },
        }
    }

    const handleSubmit = (values, { setSubmitting, setFieldError, resetForm }) => {
        setSubmitting(true)
        const verify_email_req = getVerifyEmailRequest(values.email)
        const binary_socket = BinarySocketBase.init()

        binary_socket.onopen = () => {
            binary_socket.send(JSON.stringify(verify_email_req))
        }
        binary_socket.onmessage = msg => {
            const response = JSON.parse(msg.data)
            if (response.error) {
                binary_socket.close()
                setSubmitting(false)
                setFieldError('email', response.error.message)
                return
            }

            resetForm({})
            setSubmitting(false)
            binary_socket.close()
            openSnackbar('Success! Please check your email address')
        }
    }
    const handleSocialSignup = e => {
        e.preventDefault()

        const data_provider = e.currentTarget.getAttribute('data-provider')
        Login.initOneAll(data_provider)
    }

    console.log(data['hero_desktop']) // eslint-disable-line

    return (
        <Background data={data['hero_background']}>
            <HeroContainer>
                <Flex alignItems="center">
                    <Flex
                        flexDirection="column"
                        maxWidth={{ _: '100%', xl: '428px' }}
                        marginRight={{ _: '0', xl: '56px' }}
                    >
                        <Text
                            color="text_colored_background"
                            as="h1"
                            fontSize={{ _: '3xl', md: '4xl', xl: '6xl' }}
                        >
                            {localize('Deriv')}
                        </Text>
                        <Text
                            color="text_colored_background"
                            as="h1"
                            fontSize={{ _: '3xl', md: '4xl', xl: '6xl' }}
                        >
                            {localize('with Crypto')}
                        </Text>
                        <StyledText as="p" fontSize={{ _: 'lg', md: 'xl' }}>
                            {localize(
                                'Trade forex, commodities, synthetic and stock indices with the world’s leading cryptocurrencies.',
                            )}
                        </StyledText>
                        {is_mounted && (
                            <Media lessThan="desktop">
                                <StyledImage
                                    data={data['hero_mobile']}
                                    alt="platform devices mobile"
                                    width="288px"
                                    height="161px"
                                />
                            </Media>
                        )}
                        <Formik
                            initialValues={{ email: '' }}
                            validate={handleValidation}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, status, dirty, isSubmitting }) => (
                                <Form>
                                    <Field name="email">
                                        {({ field }) => (
                                            <StyledInput
                                                id="email"
                                                error={touched.email && errors.email}
                                                placeholder={localize('Your email')}
                                                {...field}
                                            />
                                        )}
                                    </Field>
                                    <Button
                                        disabled={!dirty || isSubmitting}
                                        type="submit"
                                        primary
                                        width={1}
                                        mt="xs"
                                        mb="m"
                                    >
                                        {localize('Get started')}
                                    </Button>
                                </Form>
                            )}
                        </Formik>

                        <Flex alignItems="center">
                            <WhiteText as="p" size="s">
                                {localize('Or sign up with')}
                            </WhiteText>

                            <LogoWrapper onClick={handleSocialSignup} data-provider="google">
                                <img src={GoogleLogo} alt="Google" />
                            </LogoWrapper>
                            <LogoWrapper onClick={handleSocialSignup} data-provider="facebook">
                                <img src={FacebookLogo} alt="Facebook" />
                            </LogoWrapper>
                        </Flex>
                    </Flex>
                    <div>
                        <Media greaterThanOrEqual="desktop">
                            <NextGenImage
                                data={data['hero_desktop']}
                                alt="platform devices desktop"
                                width="688px"
                                height="382px"
                            />
                        </Media>
                    </div>
                </Flex>
            </HeroContainer>
        </Background>
    )
}
