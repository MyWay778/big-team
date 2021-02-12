import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import StatusItem from "./StatusItem";

let container = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})
afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

const renderStatusItem = (sendStatus)=>{
    return  act(()=>{
        render(<StatusItem
            userStatus="yo yo"
            sendStatus={sendStatus}
            myPage={true}
        />, container)
    })
}

it('is span', ()=>{
    renderStatusItem((status)=>{console.log(status)})
    let span = container.querySelector('span')
    expect(span.textContent).toBe('yo yo')
})

it('change edit mode', ()=>{
    const onClick = jest.fn(status => status)
    renderStatusItem(onClick)
    let span = container.querySelector('span')
    act(() => {
        span.click()
    })
    const input = container.querySelector('input')
    expect(input.tagName).toBe('INPUT')
    expect(input.value).toBe('yo yo')

    act(() => {
        input.blur()
    })
    // console.log(onClick.mock.calls.length)
    expect(onClick.mock.results[0].value).toBe('yo yo')
})
