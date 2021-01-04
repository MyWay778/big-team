import React from 'react'

import classes from './PageSelector.module.css'

const ArrowSelector = props => {
    return (
        <span style={{ visibility: props.visibility ? 'hidden' : 'visible' }} onClick={props.onClick}>
      {props.direction}
    </span>
    )
}

const PageSelector = props => {
    let currentPage = props.currentPage
    const pageCount = props.pageCount

    let output = []
    let finish
    let start

    if (currentPage === 1) {
        start = currentPage
        if (pageCount <= 3) {
            finish = pageCount
        } else {
            finish = start + 2
        }
    } else if (currentPage === pageCount) {
        start = currentPage - 2
        if (start === 0) start = 1
        finish = currentPage
    } else {
        start = currentPage - 1
        finish = start + 2
    }

    const onClick = i => {
        props.handleSetCurrentPage(i)
    }

    for (let i = start - 1; i < finish; i++) {
        const number = i + 1
        const item = (
            <li
                key={i}
                className={number === currentPage ? classes.active : undefined}
                onClick={e => onClick(number)}
            >
                {number}
            </li>
        )
        output.push(item)
    }

    return (
        <ul className={classes.pageSelector}>
            <li>
                <ArrowSelector
                    direction="<<"
                    visibility={pageCount <= 3 || currentPage < 3}
                    onClick={() => onClick(1)}
                />
            </li>
            {output}
            <li>
                <ArrowSelector
                    direction=">>"
                    visibility={pageCount <= 3 || currentPage > pageCount - 2}
                    onClick={() => onClick(pageCount)}
                />
            </li>
        </ul>
    )
}

export default PageSelector
