import React from 'react'
import classes from './Item.module.css'

class Item extends React.Component{
    state = {
        editMode: false,
    }
    handleSetAboutMe = () => {
        this.setState({
            editMode: true
        })
    }
    render() {
        return (
            <div>
                <span className={classes.item_halfOpacity}>{this.props.question}:</span>&nbsp;&nbsp;
                {!this.state.editMode &&
                    <>
                        <span onClick={this.handleSetAboutMe}>{this.props.answer}</span>
                    </>
                }
                {this.state.editMode &&
                    <>
                        <input type="text"
                               autoFocus={true} onBlur={() => this.setState({editMode: false})}
                               defaultValue={this.props.answer}/>
                    </>
                }
            </div>
        )
    }
}

export default Item
