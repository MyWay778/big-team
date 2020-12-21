import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/styles.css'
import './styles/constants.css'

const dialogsData = [
    {
        id: 1, name: "Петр", messages: [
            {id:1, out: false, text: 'Привет, как дела?'}, {id:2, out: true, text: 'Отлично как у тебя?'}]
    },
    {
        id: 2, name: "Вася", messages: [
            {id:1, out: false, text: 'Привет, как дела?'}, {id:2, out: true, text: 'Отлично как у тебя?'}]
    }
]
const postsData = [
    {id:1, message: 'Всем привет!) Как у вас дела???'},
    {id:2, message: 'У меня все ОК!'}
]

ReactDOM.render(<App dialogsData={dialogsData} posts={postsData} />, document.getElementById('root'))
