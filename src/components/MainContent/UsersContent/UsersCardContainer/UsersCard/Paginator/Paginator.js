import React, {useState, useEffect} from 'react'
import classes from './Paginator.module.css'
import classNames from 'classnames/bind'

const Paginator = ({pageCount, currentPage, handleSetCurrentPage, portionSize = 10}) => {

    const cn = classNames.bind(classes)

    const divideOnPortionSizeAndFloor = (value) => {
        return Math.floor(value / portionSize)
    }

    const portionCount = divideOnPortionSizeAndFloor(pageCount)
    const currentPortion = divideOnPortionSizeAndFloor(currentPage)

    const [portionNumber, setPortionNumber] = useState(currentPortion + 1)


    let firstItemInPortion = ((portionNumber - 1) * portionSize) + 1
    let lastItemInPortion = (portionNumber * portionSize) + 1

    useEffect(()=>{handleSetCurrentPage(firstItemInPortion)},[portionNumber])

    const pages = []

    if (portionNumber === portionCount + 1) {
        lastItemInPortion = firstItemInPortion + (pageCount - (portionCount * 10))
    }

    for (let i = firstItemInPortion; i < lastItemInPortion; i++) {
        let span = <span className={ cn({active: currentPage === i })} key={i} onClick={() => {
            handleSetCurrentPage(i)
        }}> {i} </span>
        pages.push(span)
    }

    const handleOnClickOnButtonCreator = (isForwardDirection = false, isOne= false) => {
        return (evt) => {
            setPortionNumber(isForwardDirection ? (isOne ? portionNumber  : portionCount) + 1 :  isOne ? portionNumber - 1 : 1)
        }
    }

    return (
        <div className={classes.paginator}>
            <div className={classes.button_big}>
                {portionNumber > 2 &&
                <button className={classes.button} onClick={handleOnClickOnButtonCreator()}>{"<<<"}</button>}
            </div>
            <div className={classes.button_small}>
                {portionNumber !== 1 &&
                <button className={classes.button} onClick={handleOnClickOnButtonCreator(false,true)}>{"<"}</button>}
            </div>
            <div className={classes.pages}>{pages}</div>
            <div className={classes.button_small}>
                {portionNumber !== portionCount + 1 &&
                <button className={classes.button} onClick={handleOnClickOnButtonCreator(true, true)}>{">"}</button>}
            </div>
            <div className={classes.button_big}>
                {portionNumber < portionCount &&
                <button className={classes.button} onClick={handleOnClickOnButtonCreator(true, false)}>{">>>"}</button>}
            </div>
        </div>
    )
}

export default Paginator