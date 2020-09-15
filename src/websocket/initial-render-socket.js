import { BinarySocketBase } from './socket_base'
import { toISOFormat, isBrowser } from 'common/utility'
import { CookieStorage } from 'common/storage'

// Make sure that language is passed on
export const initializeWebsocket = lang => {
    if (isBrowser()) {
        localStorage.setItem('i18n', lang)

        const date_first_contact = new CookieStorage('date_first_contact')

        if (!date_first_contact.get('date_first_contact')) {
            const binary_socket = BinarySocketBase.init()
            binary_socket.onopen = () => {
                binary_socket.send(JSON.stringify({ time: 1 }))
            }

            binary_socket.onmessage = msg => {
                const data = JSON.parse(msg.data)
                date_first_contact.set(
                    'date_first_contact',
                    toISOFormat(new Date(data.time * 1000)),
                )
                binary_socket.close()
            }
        }
    }
}
