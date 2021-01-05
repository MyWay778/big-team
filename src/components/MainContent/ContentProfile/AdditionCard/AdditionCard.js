import React from 'react'
import classes from './AdditionCard.module.css'
import HeaderFour from "../UserCard/MainInfo/TextBlock/HeaderFour/HeaderFour";
import Item from "../UserCard/MainInfo/TextBlock/Items/Item/Item";
import Preloader from "../../UsersContent/UsersCardContainer/UsersCard/Preloader/Preloader";

const AdditionCard = props => {
    const items = []
    if (!props.isLoading) {
        for (let contact in props.contacts) {
            if (props.contacts[contact]) {
                const item = <Item key={contact} question = {contact} answer = {props.contacts[contact]} />
                items.push(item)
            }
        }
    }
    return <aside className={`${classes.additionCard} ${classes.card}`}>
        {
           props.isLoading? <Preloader /> : [
               <HeaderFour key={0} text={"Контакты"}/>,
               <div key={1} className={classes.contentBlock}>
                    {items}
                </div>
           ]
        }
    </aside>
}

export default AdditionCard
