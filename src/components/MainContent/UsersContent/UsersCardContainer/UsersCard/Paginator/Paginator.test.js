import React from 'react'
import {create, act} from 'react-test-renderer'
import Paginator from "./Paginator";

describe('< Paginator />', ()=> {
    const createPaginator = (pageCount, currentPage, handleSetCurrentPage, portionSize) =>{
        let props = {
            pageCount,
            currentPage,
            handleSetCurrentPage,
            portionSize
        }
        let component
        act(() => {
            component = create(<Paginator {...props} />)
        })
        return component
    }
    it('contains 10 spans', ()=> {
        let component = createPaginator(10, 1, ()=>{}, 10)
        const instance = component.root
        const spans = instance.findAllByType('span')
        expect(spans.length).toBe(10)
    })

    it('contains 3 spans', ()=> {
        let component = createPaginator(3, 1, ()=>{}, 10)
        const instance = component.root
        const spans = instance.findAllByType('span')
        expect(spans.length).toBe(3)
    })

    it('if page count more then 10 the button next appears', ()=> {
        let component = createPaginator(11, 1, ()=>{}, 10)
        const instance = component.root
        const button = instance.findByType('button')
        expect(button.children[0]).toBe('>')
    })

})