import React from 'react'
import {create, act} from 'react-test-renderer'
import StatusItem from "./StatusItem";

describe('StatusItem component', () => {
    it('the span is', () => {
        let component
        let mockSendStatus = jest.fn()
        act(() => {
            component = create(<StatusItem
                userStatus="yo yo"
                sendStatus={mockSendStatus}
                myPage={true}
            />)
        })
        const instance = component.root
        const span = instance.findByType('span')

        act(() => {
            span.props.onClick()
        })
        const input = instance.findByType('input')
    })
})


