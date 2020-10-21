import React from 'react'
import { FlexBox, FlexRow, StyledIcon, StyledText } from './_check-email-style'
import { localize } from 'components/localization'
import Spam from 'images/svg/oauth/spam.svg'
import Typo from 'images/svg/oauth/typo.svg'
import WrongEmail from 'images/svg/oauth/wrong-email.svg'
import Firewall from 'images/svg/oauth/firewall.svg'

const Row = ({ Icon, content, alt }) => (
    <FlexRow>
        <StyledIcon src={Icon} alt={alt} />
        <StyledText color="text_primary" textAlign="left" fontSize={{ _: 's', xxl: 'm' }}>
            {content}
        </StyledText>
    </FlexRow>
)

export const IconGrid = () => (
    <FlexBox>
        <Row
            Icon={Spam}
            alt="spam"
            content={localize(
                'The email is in your spam folder (sometimes things get lost there).',
            )}
        />
        <Row
            Icon={WrongEmail}
            alt="wrong email"
            content={localize(
                'You accidentally gave us another email address (usually a work or a personal one instead of the one you meant).',
            )}
        />
        <Row
            Icon={Typo}
            alt="typo"
            content={localize(
                'The email address you entered had a mistake or typo (happens to the best of us).',
            )}
        />
        <Row
            Icon={Firewall}
            alt="firewall"
            content={localize(
                'We can’t deliver the email to this address (usually because of firewalls or filtering).',
            )}
        />
    </FlexBox>
)
