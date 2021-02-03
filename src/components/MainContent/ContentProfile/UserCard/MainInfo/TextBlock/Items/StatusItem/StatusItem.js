import React, {useEffect, useState} from 'react'

const StatusItem = ({userStatus, sendStatus, myPage, ...props}) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(userStatus || "")

    useEffect(() => {
        setStatus(userStatus)
    }, [userStatus])

    const activateEditModeHandler = () => {
        if (myPage) {
            setEditMode(true)
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        sendStatus(status)
    }
    const changeUserStatusHandler = (e) => {
        setStatus(e.target.value)
    }

    return <div>
        {!editMode &&
        <span onClick={activateEditModeHandler}>{userStatus || 'статуса нет'}</span>
        }
        {editMode &&
        <input autoFocus onChange={changeUserStatusHandler} onBlur={deactivateEditMode}
               value={status}/>
        }
    </div>

}

export default StatusItem