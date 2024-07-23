import React from 'react'

const Modal = ({setParent, activeWorbite}) => {
    console.log(activeWorbite)
    const {word, definitions, pos} = activeWorbite
    // Part of speech
    let partOfSpeech;
    switch(pos){
        case 'a.':
        partOfSpeech= 'bg-adjective'
        break
        case 'adv.':
        partOfSpeech='bg-adverb'
        break
        case 'conj.':
        partOfSpeech='bg-conjunction'
        break
        case 'interj.':
        partOfSpeech='bg-interjection'
        break  
        case 'n.':
        partOfSpeech='bg-noun'
        break
        case 'prep.':
        partOfSpeech='bg-preposition'
        break
        case 'pron.':
        partOfSpeech='bg-pronoun'
        break
        case 'v.':
        partOfSpeech='bg-verb'
        break
    }

    return (
    <>
    {   
        // Modal
        <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-[1000]">
            {/* Overlay */}
            <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-[rgba(49,49,49,0.8)] "></div>
            {/* Content */}
            <div className="absolute top-[30%] left-[20%] bg-white w-[558px] h-[427px] rounded-[27px] overflow-hidden">
                {/* Top Half*/}
                <div className=" px-12 py-8 bg-[#F4F5FE]">
                    <p className='text-[40px]'>{word.toLowerCase().split(';')[0]}</p>
                    <p className='text-sm font-normal'>{partOfSpeech.slice(3)}</p>
                    <div className="border-t-[2px] border-black w-100 my-2"></div>
                    <p className='text-sm font-normal leading-4'>{definitions[0].split('.')[0] + '.'}</p>
                </div>
                {/* Bottom Half */}
                <div className="px-12 py-8 ">
                    <p className='text-xl'>Would you like to save worbite <span className='text-primary'>{'`' + word.toLowerCase().split(';')[0] + '`'}</span> to your library?</p>
                    <div className="text-end mt-4">
                        <button className='mx-4' onClick={()=>{setParent(null)}}>
                            <svg width="50" height="50" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.7966 45.0731C34.9907 42.2799 32.3753 39.6707 29.7598 37.0616C28.8838 36.1856 27.9887 35.3159 27.1317 34.4208C25.005 32.2116 25.0114 29.3422 27.1317 27.1902C29.2774 25.0064 32.1975 24.9366 34.413 27.1077C37.7268 30.3516 40.9834 33.6527 44.2591 36.9283C44.4749 37.1442 44.6463 37.3917 44.9002 37.7028C45.205 37.4171 45.4208 37.2267 45.6303 37.0172C48.8869 33.7606 52.1499 30.504 55.4065 27.241C56.9174 25.7238 58.6822 25.0699 60.7453 25.8317C62.8783 26.6189 64.1924 28.1742 64.4717 30.4722C64.6431 31.9006 64.1353 33.1512 63.1513 34.1669C61.5198 35.8555 59.8566 37.4997 58.1934 39.1629C56.2826 41.0737 54.3654 42.9782 52.3975 44.9461C52.6323 45.1937 52.8291 45.4095 53.0386 45.619C56.2762 48.8566 59.5074 52.1068 62.7577 55.3317C64.3067 56.868 64.9732 58.6518 64.1733 60.7404C63.3544 62.8924 61.7483 64.2065 59.4186 64.4477C57.8252 64.6128 56.5365 63.9145 55.4319 62.8035C52.1816 59.5406 48.9187 56.284 45.662 53.0273C45.4525 52.8178 45.2304 52.6147 44.9002 52.2973C44.4749 52.7798 44.1131 53.2305 43.7068 53.6431C40.6914 56.6712 37.657 59.6866 34.6416 62.721C33.1371 64.2319 31.3913 64.9429 29.3154 64.1811C27.1761 63.3939 25.8747 61.8196 25.5891 59.5342C25.3796 57.8773 26.1033 56.5442 27.2523 55.3952C30.4962 52.164 33.7274 48.9201 36.9777 45.6888C37.1935 45.4793 37.4665 45.327 37.8157 45.0731H37.7966Z" fill="white"/>
                                <path d="M45.0154 0.00093084C20.3019 -0.157774 0.101957 19.9977 0.000386323 44.908C-0.101185 69.6723 19.8385 89.8532 44.844 89.9992C69.6591 90.1452 89.8971 70.1294 90.0495 45.035C90.1955 20.3342 70.0336 0.165984 45.0154 0.00093084ZM64.1679 60.7404C63.349 62.8924 61.7429 64.2065 59.4131 64.4477C57.8197 64.6128 56.531 63.9145 55.4264 62.8036C52.1762 59.5406 48.9132 56.284 45.6566 53.0274C45.4471 52.8179 45.2249 52.6147 44.8948 52.2973C44.4695 52.7798 44.1076 53.2305 43.7013 53.6431C40.6859 56.6712 37.6515 59.6866 34.6361 62.721C33.1316 64.2319 31.3858 64.9429 29.31 64.1811C27.1706 63.3939 25.8693 61.8196 25.5836 59.5342C25.3741 57.8774 26.0978 56.5443 27.2468 55.3952C30.4907 52.164 33.7283 48.9201 36.9722 45.6888C37.1881 45.4794 37.4611 45.327 37.8102 45.0731C35.0043 42.2799 32.3889 39.6708 29.7734 37.0617C28.8974 36.1856 28.0023 35.3159 27.1453 34.4208C25.0186 32.2116 25.025 29.3423 27.1453 27.1902C29.2909 25.0064 32.2111 24.9366 34.4266 27.1077C37.7404 30.3516 40.997 33.6527 44.2727 36.9283C44.4885 37.1442 44.6599 37.3918 44.9138 37.7028C45.2185 37.4172 45.4344 37.2267 45.6439 37.0172C48.9005 33.7606 52.1635 30.504 55.4201 27.241C56.931 25.7238 58.6958 25.0699 60.7589 25.8317C62.8919 26.6189 64.206 28.1742 64.4853 30.4722C64.6567 31.9006 64.1488 33.1512 63.1649 34.1669C61.5334 35.8555 59.8638 37.4997 58.2069 39.1629C56.2961 41.0737 54.379 42.9782 52.411 44.9461C52.6459 45.1937 52.8427 45.4095 53.0522 45.619C56.2898 48.8566 59.521 52.1069 62.7713 55.3317C64.3202 56.868 64.9805 58.6518 64.1869 60.7404H64.1679Z" fill="#D9D9D9"/>
                            </svg>
                        </button>
                        <button >
                            <svg width="50" height="50" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.9905 0C69.8533 0 89.9683 20.1277 89.9683 45.0032C89.9683 69.866 69.8343 90 44.9778 90C20.1277 89.9937 -0.00634592 69.847 1.50039e-06 44.9905C0.00634892 20.1213 20.1277 0 44.9905 0ZM38.2495 49.4654C41.6771 49.4654 45.1111 49.4337 48.5387 49.4971C49.0973 49.5098 49.6495 49.9161 50.2081 50.1382C49.9605 50.6841 49.8399 51.3379 49.4464 51.7505C47.8151 53.477 46.0759 55.0956 44.4319 56.8094C42.5975 58.7136 42.6165 61.1764 44.4002 63.0235C46.1711 64.8515 48.7672 65.0229 50.627 63.233C55.8319 58.2185 60.9923 53.1596 66.1147 48.0563C67.9808 46.1965 67.9808 43.6702 66.1274 41.8358C60.9796 36.7579 55.7811 31.7371 50.5762 26.7226C49.2813 25.4722 47.6945 25.2183 46.0251 25.8784C42.9339 27.1098 42.1024 30.7278 44.3811 33.1399C46.0822 34.9425 47.8976 36.6373 49.6177 38.4273C49.9478 38.77 50.335 39.519 50.1827 39.7602C49.9351 40.1601 49.2877 40.3632 48.7735 40.5219C48.3863 40.6425 47.9357 40.5536 47.5168 40.5536C41.2392 40.5536 34.9616 40.5473 28.684 40.5536C25.6182 40.5536 23.6759 42.3246 23.6949 45.0413C23.7139 47.6818 25.6436 49.44 28.6078 49.4654C31.8259 49.4908 35.0441 49.4654 38.2622 49.4718L38.2495 49.4654Z" fill="#182DEA"/>
                                <path d="M38.2491 49.4654C35.031 49.4654 31.8128 49.4845 28.5947 49.4591C25.6368 49.4337 23.7072 47.6755 23.6818 45.0349C23.6627 42.3182 25.605 40.5537 28.6708 40.5473C34.9484 40.5346 41.226 40.5473 47.5036 40.5473C47.9226 40.5473 48.3732 40.6298 48.7604 40.5156C49.2809 40.3569 49.922 40.1538 50.1695 39.7539C50.3219 39.5127 49.9347 38.7637 49.6046 38.4209C47.8908 36.631 46.0691 34.9362 44.368 33.1335C42.0893 30.7215 42.9208 27.1035 46.012 25.8721C47.6814 25.2056 49.2619 25.4659 50.5631 26.7163C55.768 31.7308 60.9665 36.7516 66.1143 41.8295C67.9677 43.6639 67.974 46.1902 66.1016 48.05C60.9792 53.1533 55.8187 58.2122 50.6139 63.2266C48.7541 65.0166 46.158 64.8452 44.387 63.0172C42.5971 61.1701 42.5844 58.7073 44.4188 56.803C46.0628 55.0956 47.802 53.4707 49.4332 51.7442C49.8204 51.3379 49.9474 50.6778 50.1949 50.1319C49.6364 49.9098 49.0841 49.4972 48.5256 49.4908C45.098 49.4337 41.6704 49.4591 38.2364 49.4591L38.2491 49.4654Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Close */}
        </div>
    }
    </>
    )
}

export default Modal