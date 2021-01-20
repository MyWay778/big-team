import React from 'react'

class StatusItem extends React.Component {
    state = {
        editMode: false,
        value: this.props.userStatus || ''
    }
    componentDidUpdate(prevProps) {
        if(this.props.userStatus && this.props.userStatus !== prevProps.userStatus) {
            this.setState({value: this.props.userStatus})
        }
    }
    activateEditModeHandler = () => {
        if (this.props.myPage) {
            this.setState({editMode: true})
        }
    }
    deactivateEditMode = (evt) => {
        this.setState({
            editMode: false,
        })
        this.props.sendStatus(this.state.value)
    }
    changeUserStatusHandler = (evt) => {
        this.setState({value: evt.target.value})
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <span onClick={this.activateEditModeHandler}>{this.props.userStatus || 'статуса нет'}</span>
            }
            {this.state.editMode &&
                <input autoFocus onChange={this.changeUserStatusHandler} onBlur={this.deactivateEditMode} value={this.state.value}/>
            }
        </div>
    }
}

export default StatusItem