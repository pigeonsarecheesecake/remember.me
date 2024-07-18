import SideBarDroppable from "./SideBarDroppable"
const SideBar = ({activeId}) => {
    
    // Droppable containers
    const Droppablecontainers = [{
        name:'adjective',
        abbreviation:'adj.',
        id:1
    },
    {
        name:'adverb',
        abbreviation:'adv.',
        id:2
    },
    {
        name:'conjunction',
        abbreviation:'con.',
        id:3
    },
    {
        name:'interjection',
        abbreviation:'int.',
        id:4
    },
    {
        name:'noun',
        abbreviation:'nou.',
        id:5
    },
    {
        name:'preposition',
        abbreviation:'pre.',
        id:6
    },
    {
        name:'pronoun',
        abbreviation:'pro.',
        id:7
    },
    {
        name:'verb',
        abbreviation:'ver.',
        id:8
    }]


    return (
    <div className={`border border-2 border-tertiary rounded-[10px] min-w-16 h-[539px] flex flex-col items-center mr-6`}>
        {/* Library logo */}
        <div className="bg-tertiary h-12 w-12 rounded-[10px] my-2 flex justify-center items-center">
            <svg width="26" height="25" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_581_1092)">
                    <path d="M16.9785 15.0032C16.9785 11.4177 16.9827 7.83224 16.9785 4.24678C16.9764 2.59666 17.6272 1.29728 19.0913 0.507079C20.5534 -0.281005 21.9965 -0.126769 23.3698 0.794423C25.208 2.0262 27.0419 3.26643 28.8991 4.46863C30.34 5.40249 30.9992 6.6892 30.9929 8.40482C30.9696 14.1686 30.9844 19.9345 30.9844 25.6983C30.9844 28.3055 29.3047 29.9831 26.7017 29.9852C24.8213 29.9852 22.9409 29.9894 21.0605 29.9852C18.7385 29.9789 16.9912 28.2421 16.9849 25.918C16.9743 22.2797 16.9827 18.6415 16.9827 15.0032H16.9785ZM21.0204 4.07564V25.9476H26.9574C26.9658 25.8293 26.9764 25.7448 26.9764 25.6603C26.9764 19.8965 26.9806 14.1306 26.9637 8.36679C26.9637 8.17452 26.7947 7.91253 26.6278 7.79844C24.8868 6.61103 23.129 5.44898 21.3753 4.28058C21.276 4.21509 21.1704 4.16227 21.0204 4.07564Z" fill="#182DEA"/>
                    <path d="M8.50644 17.4667C8.50644 14.0038 8.5001 10.5409 8.51067 7.07796C8.51489 5.66871 9.71498 4.73484 11.0249 5.08557C11.8109 5.29685 12.3602 5.93281 12.4764 6.77794C12.4997 6.95119 12.5039 7.12867 12.5039 7.30404C12.5039 14.1052 12.5039 20.9085 12.5081 27.7097C12.5081 28.6774 12.1785 29.438 11.2573 29.8331C9.91992 30.4057 8.51278 29.4211 8.50855 27.9041C8.49799 24.4243 8.50433 20.9444 8.50433 17.4646L8.50644 17.4667Z" fill="#182DEA"/>
                    <path d="M4.00568 21.0057C4.00568 23.2728 4.00779 25.5398 4.00568 27.8069C4.00568 29.0936 3.18801 29.9831 2.0154 29.9852C0.849116 29.9873 0.00609892 29.0873 0.00609892 27.8153C0.00187328 23.2643 0.00187328 18.7133 0.00609892 14.1623C0.00609892 12.8882 0.853342 12.003 2.0323 12.0135C3.19435 12.0241 4.00356 12.8946 4.00568 14.1517C4.0099 16.4357 4.00568 18.7196 4.00568 21.0057Z" fill="#182DEA"/>
                </g>
                <defs>
                    <clipPath id="clip0_581_1092">
                        <rect width="30.9909" height="30" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
        {/* Line break */}
        <svg width="44" height="3" className="mt-2 mb-4" viewBox="0 0 44 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="1.5" x2="43.5" y2="1.5" stroke="#182DEA" strokeOpacity="0.1" strokeWidth="3"/>
        </svg>
        {/* Parts of Speech */}
        {
            Droppablecontainers.map(pos =>
                (<SideBarDroppable id={pos.id} activeId={activeId} pos={pos} key={pos.id}/>)
            )
        }
    </div>
  )
}

export default SideBar


