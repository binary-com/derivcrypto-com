import React from 'react'
import { Formik, Form } from 'formik'
import { StyledGridContainer, StyledLeftImage, StyledRightImage } from '../_oauth-style'
import {
    StyledContainer,
    InputGroup,
    InputWrapper,
    ButtonContainer,
    ButtonWrapper,
    ReturnWrapper,
    TextWrapper,
    RedirectWrapper,
} from './_reset-password-style'
import { Layout, SEO } from 'components/page-elements'
import { localize, WithIntl } from 'components/localization'
import { Text } from 'components/elements'
import validation from 'common/validation'
import { BinarySocketBase } from 'websocket/socket_base'
import Login from 'common/login'
import CoinIcon from 'images/svg/oauth/coins-icons.svg'

const resetValidation = values => {
    let errors = {}

    const email_error = validation.email(values.email)

    if (email_error) {
        errors.email = email_error
    }

    return errors
}

const resetSubmission = (values, actions) => {
    const binary_socket = BinarySocketBase.init()

    binary_socket.onopen = () => {
        binary_socket.send(JSON.stringify({ verify_email: values.email, type: 'reset_password' }))
    }
    binary_socket.onmessage = msg => {
        const response = JSON.parse(msg.data)
        actions.setSubmitting(false)
        if (response.error) {
            actions.setStatus({
                error: response.error.message,
            })
            return
        }

        actions.resetForm({ email: '' })
        actions.setStatus({
            success: localize(
                'Please check your email and click on the link provided to reset your password.',
            ),
        })
        binary_socket.close()
    }
}

const ResetPassword = () => (
    <Layout>
        <SEO
            title={localize('Reset password | Deriv Crypto')}
            description={localize(
                'Forgot your Deriv Crypto password? Want to reset your password? Send us your email address and we’ll email you the instructions.',
            )}
            no_index
        />
        <StyledGridContainer>
            <StyledLeftImage>
                <img src={CoinIcon} alt="coins icon" />
            </StyledLeftImage>
            <StyledContainer>
                <Text
                    color="text_primary"
                    as="h2"
                    textAlign="center"
                    fontSize={{ _: 'xl', xxl: '2xl' }}
                >
                    {localize('Reset password')}
                </Text>
                <Text color="text_primary" textAlign="center" fontSize="m">
                    {localize("We'll email you instructions to reset your password.")}
                </Text>
                <Formik
                    initialValues={{ email: '' }}
                    initialStatus={{}}
                    validate={resetValidation}
                    onSubmit={resetSubmission}
                >
                    {({ values, errors, handleChange, handleBlur, resetForm, status }) => (
                        <Form noValidate>
                            <InputGroup>
                                <InputWrapper
                                    id="email"
                                    name="email"
                                    error={errors.email}
                                    value={values.email}
                                    handleError={resetForm}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="off"
                                    type="text"
                                    label={localize('Email')}
                                    background="white"
                                    placeholder={'Email'}
                                    data-lpignore="true"
                                    required
                                />
                            </InputGroup>
                            <Text align="center" color="red">
                                {status.error && status.error}
                            </Text>
                            <Text align="center" color="green">
                                {status.success && status.success}
                            </Text>
                            <ButtonContainer>
                                <ButtonWrapper primary disabled={!values.email} type="submit">
                                    {localize('Reset my password')}
                                </ButtonWrapper>
                            </ButtonContainer>
                        </Form>
                    )}
                </Formik>
                <ReturnWrapper>
                    <TextWrapper fontSize="m">{localize('Return to')}</TextWrapper>
                    <RedirectWrapper onClick={Login.redirectToLogin}>
                        &nbsp;{localize('log in page')}
                    </RedirectWrapper>
                </ReturnWrapper>
            </StyledContainer>
            <StyledRightImage>
                <img src={CoinIcon} alt="coins icon" />
            </StyledRightImage>
        </StyledGridContainer>
    </Layout>
)

export default WithIntl()(ResetPassword)
