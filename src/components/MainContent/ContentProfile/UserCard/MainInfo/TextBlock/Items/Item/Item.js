import React from 'react'
import classes from './Item.module.css'

class Item extends React.Component{
    render() {
        return (
            <div>
                <span className={classes.item_halfOpacity}>{this.props.question}:&nbsp;&nbsp;</span>
                <span onClick={this.handleSetAboutMe}>{this.props.answer}</span>
            </div>
        )
    }
}

export default Item
