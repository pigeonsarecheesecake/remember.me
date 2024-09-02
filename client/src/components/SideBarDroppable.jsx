import React from 'react'
const SideBarDroppable = ({pos}) => {
    const {name, abbreviation}=pos
    const bgClass = {
        adjective: 'bg-adjective',
        adverb: 'bg-adverb',
        conjunction: 'bg-conjunction',
        interjection: 'bg-interjection',
        noun: 'bg-noun',
        preposition: 'bg-preposition',
        pronoun: 'bg-pronoun',
        verb: 'bg-verb',
    }
    return (
        <div  className={`${bgClass[name]}  h-12 w-12 rounded-[10px] mb-2 flex justify-center items-center`}>
            {abbreviation}
        </div>
    )
}

export default SideBarDroppable