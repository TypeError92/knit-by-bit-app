import { useState } from "react";
import logo from '../../assets/logo.svg'
import {IoAddCircleOutline, IoRemoveCircleOutline} from 'react-icons/io5'
import { GiWool } from "react-icons/gi";

export function YarnListAccordionCard({yarnName, yarnInfo}){
    const [isOpen, setIsOpen] = useState(false)
    return (<>
        <YarnListAccordionCardHeader yarnName={yarnName} isOpen={isOpen} setIsOpen={setIsOpen}/>
        {isOpen && <YarnListAccordionCardBody yarnInfo={yarnInfo}/>}
    </>)

}

function YarnListAccordionCardHeader({yarnName, isOpen, setIsOpen}){
    const buttonOnClick = (e) => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }

    return (
        <div className="accordion-card__header">
            <GiWool className="accordion-card__header__icon {
" src={logo}/>
            <h2>{yarnName}</h2>
            {isOpen
            ? <IoRemoveCircleOutline className='accordion-card__header__icon' onClick={()=>{setIsOpen(false)}}/>
            : <IoAddCircleOutline className='accordion-card__header__icon' onClick={()=>{setIsOpen(true)}}/>}
        </div>
    )
}

function YarnListAccordionCardBody({yarnInfo}){
    return (
        <ul className="yarn-list__accordion-card__body">
            {Object.entries(yarnInfo)
            .map(([statName, stat], i, arr) => {
                return [
                    <li key={i*2}>
                        <h3>{statName}</h3>
                    </li>,
                    <li key={i*2+1}>
                        <p>{stat}</p>
                    </li>
                ]
            })
            .flat()}
        </ul>
    )
}