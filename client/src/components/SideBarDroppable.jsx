import React from 'react'
import { useDroppable } from "@dnd-kit/core"

const SideBarDroppable = ({pos,id}) => {
    const {name, abbreviation}=pos
    const {isOver, setNodeRef} = useDroppable({
        id:id
    })
    
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
        <div ref={setNodeRef} className={`${bgClass[name]} ${isOver ? 'border border-2 border-[#182DEA]' : undefined} h-12 w-12 rounded-[10px] mb-2 flex justify-center items-center`}>
            {abbreviation}
        </div>
    )
}

export default SideBarDroppable