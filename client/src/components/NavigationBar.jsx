import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { UserContext } from "../context_provider/UserContext"
import axios from "axios"

const NavigationBar = ({setSearchResults}) => {
    const {user} = useContext(UserContext)
    const {pathname} = useLocation()
    const [userInput, setUserInput] = useState('')
    const navigate=useNavigate()

    const searchWorbite = async(ev)=>{
        ev.preventDefault()
        try {
            const {data} = await axios.post('/search',{userInput})
            // For each is good for applying function to each element in an array, it's an array method
            data[0].def[0].sseq.forEach(item=>{
                item.forEach(subItem=>{
                    if(subItem[0]==='sense'){
                        if(subItem[1].dt[1]){
                        subItem[1].dt[1][1].forEach(subSubItem=>{
                            console.log(subSubItem.t
                                .replace(/{wi}/g, "")
                                .replace(/{\/wi}/g, "")
                                .replace(/{it}/g, "")
                                .replace(/{\/it}/g, "")
                            )
                        })
                    }else{
                        console.log(subItem[1].dt[0][1])
                    }
                    }
                    
                })
            })  
            setSearchResults(data)
            navigate('/search-results')
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return (
        <div className="flex justify-between w-full my-10">
            {/* Logo and search bar */}
            <div className=" flex w-4/5 items-center">
                {/* Logo */}
                <Link to={'/'}>
                    <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="#080C0A"/>
                        <path d="M36.432 45.2526C32.3909 45.2526 28.6331 43.4423 26.128 40.2834C25.8629 39.9497 25.6137 39.6023 25.3806 39.2434V40.2469C25.3806 43.0057 23.136 45.2526 20.3749 45.2526C17.6137 45.2526 15.3691 43.008 15.3691 40.2469V18.8366C15.3691 16.1669 17.4583 13.9703 20.1234 13.8377C20.2057 13.8331 20.2903 13.8309 20.3749 13.8309C20.4594 13.8309 20.544 13.8309 20.6286 13.8377C22.4366 13.9269 24.032 14.9737 24.8434 16.5851H34.56C39.344 16.5851 43.2343 20.4777 43.2343 25.2594C43.2343 30.0411 39.3417 33.9337 34.56 33.9337H33.3646C33.4469 34.0686 33.536 34.1989 33.6366 34.3223C34.3497 35.2206 35.4697 35.7577 36.6309 35.7577C36.7817 35.7577 36.9349 35.7486 37.0857 35.7303C37.5794 35.6686 38.08 35.3257 38.6126 34.96L38.6766 34.9166C39.3326 34.3429 40.128 33.9543 40.9783 33.792C41.2046 33.7417 41.4491 33.7097 41.696 33.6983C41.7646 33.696 41.8331 33.6937 41.8994 33.6937C43.3874 33.6937 44.8274 34.3886 45.7509 35.552C45.9703 35.8263 46.1623 36.1371 46.3269 36.4777L46.336 36.4983C46.3863 36.6057 46.4366 36.7177 46.48 36.832C46.496 36.8709 46.512 36.9143 46.528 36.96C46.5509 37.024 46.5691 37.0789 46.5874 37.136C46.6171 37.2274 46.6423 37.3211 46.6674 37.4171C46.6789 37.4629 46.6903 37.5086 46.6994 37.5543C46.7246 37.6709 46.7451 37.776 46.7611 37.8743C46.7634 37.8926 46.7726 37.9634 46.7726 37.9634C46.7863 38.064 46.7977 38.1714 46.8046 38.2766L46.8091 38.3383C46.8137 38.4366 46.8183 38.5257 46.8183 38.6149C46.8183 38.6446 46.8183 38.6743 46.8183 38.704C46.8183 38.704 46.8183 38.7474 46.8183 38.7611V38.8069C46.8114 38.9211 46.8023 39.0583 46.7863 39.1909C46.656 40.288 46.1531 41.3189 45.3714 42.0983C43.4034 44.1783 39.6251 45.1794 36.7543 45.248C36.6491 45.2503 36.544 45.2526 36.4411 45.2526H36.432ZM25.5817 33.936C25.9063 35.7554 26.6811 37.4766 27.8354 38.9303C29.9269 41.5634 33.0583 43.0743 36.432 43.0743C36.5189 43.0743 36.608 43.0743 36.6949 43.072C37.4629 43.0537 38.3703 42.9371 39.2434 42.752C37.8514 41.8606 36.9897 40.3223 36.9897 38.6194C36.9897 38.3863 37.0057 38.1554 37.0377 37.9269C36.9006 37.936 36.7657 37.9406 36.6286 37.9406C34.8069 37.9406 33.0491 37.0949 31.9269 35.68C31.5086 35.152 31.1863 34.5669 30.9669 33.936H25.5817ZM17.5497 40.2491C17.5497 41.808 18.8183 43.0743 20.3749 43.0743C21.9314 43.0743 23.2 41.808 23.2 40.2491V22.7611C22.3771 23.3417 21.3966 23.6571 20.3749 23.6571C19.3531 23.6571 18.3726 23.344 17.5497 22.7611V40.2491ZM40.032 36.6331C39.4834 37.1497 39.1703 37.872 39.1703 38.6194C39.1703 40.1257 40.3954 41.3509 41.9017 41.3509C42.6606 41.3509 43.3669 41.0446 43.8926 40.4869C44.2309 40.1029 44.4594 39.6754 44.5646 39.2274L44.5714 39.1977C44.5806 39.1543 44.592 39.088 44.6011 39.0217C44.6011 39.0171 44.6126 38.96 44.6149 38.9417C44.6194 38.9051 44.6217 38.864 44.624 38.8251L44.6286 38.752C44.6309 38.7109 44.6331 38.6834 44.6331 38.6583C44.6331 38.6377 44.6331 38.5851 44.6331 38.5851V38.5577C44.6331 38.5006 44.6286 38.4457 44.624 38.3886C44.6217 38.3566 44.6171 38.3246 44.6149 38.2926C44.608 38.2377 44.5989 38.1806 44.5897 38.1257C44.5897 38.1257 44.5783 38.0571 44.5737 38.0366C44.56 37.9771 44.544 37.9177 44.528 37.8583L44.5074 37.7806C44.1486 36.6537 43.1017 35.888 41.9086 35.888C41.7417 35.888 41.568 35.904 41.392 35.9383C40.9326 36.0457 40.4869 36.3269 40.0366 36.6331H40.032ZM34.5623 31.7577C38.144 31.7577 41.056 28.8434 41.056 25.2617C41.056 21.68 38.1417 18.7657 34.5623 18.7657H25.3829V22.4549H34.6011C36.1486 22.4549 37.4057 23.7143 37.4057 25.2617C37.4057 26.8091 36.1463 28.0686 34.6011 28.0686H25.3829V31.7577H34.5623ZM34.6011 25.888C34.9463 25.888 35.2274 25.6069 35.2274 25.2617C35.2274 24.9166 34.9463 24.6354 34.6011 24.6354H25.4217V25.888H34.6011ZM20.3749 16.0137C18.8686 16.0137 17.6434 17.2389 17.6434 18.7451C17.6434 20.2514 18.8686 21.4766 20.3749 21.4766C21.8811 21.4766 23.1063 20.2514 23.1063 18.7451C23.1063 17.2389 21.8811 16.0137 20.3749 16.0137Z" fill="white"/>
                    </svg>
                </Link>
                {/* Search Bar */}
                <form className=" shadow-custom flex items-center justify-between rounded-[63px] w-full ml-6 px-6 h-[50px]" onSubmit={searchWorbite}>
                    <input required className="w-full focus:outline-none" type="text" placeholder="Search Worbite" value={userInput} onChange={(ev)=>setUserInput(ev.target.value)}/>
                    <button to={'/search-results'}>
                        <svg width="20" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1433 19.8771C22.2617 19.9589 22.4131 20.0303 22.5245 20.1417C24.8116 22.4218 27.09 24.7072 29.3771 26.9856C29.7165 27.3232 29.9706 27.694 30.0263 28.1796C30.0994 28.8375 29.7774 29.4659 29.1943 29.774C28.559 30.1099 27.9359 30.0768 27.3615 29.6382C27.1109 29.4467 26.8933 29.2083 26.667 28.9838C24.4844 26.8255 22.3034 24.6672 20.1225 22.5071C20.0198 22.4062 19.9398 22.2826 19.8405 22.159C16.6466 24.4774 13.169 25.2207 9.39367 24.3225C6.46779 23.6263 4.10932 22.0076 2.34961 19.5708C-1.24988 14.5875 -0.652864 7.75234 3.72292 3.50885C8.14047 -0.774683 14.9565 -1.16979 19.811 2.50802C24.9665 6.41385 26.4982 14.175 22.1433 19.8771ZM21.3775 12.337C21.3827 7.35549 17.3707 3.33305 12.3944 3.32783C7.39029 3.32435 3.37132 7.34505 3.3748 12.3544C3.37828 17.3307 7.40073 21.3392 12.3909 21.3375C17.3863 21.3357 21.374 17.3429 21.3775 12.3353V12.337Z" fill="#182DEA"/>
                        </svg>
                    </button>
                </form>
            </div>
        
            {/* Register and Log in */}
            <div className="flex items-center justify-end w-1/5 ">
                {user && (
                    <Link to={'/account'}>{user.username}</Link>
                )}
                {!user && (
                    <>
                    <Link  to={'/register'} className={`mr-6 ${pathname==='/register' ? 'text-primary' : ''}`}>Sign Up</Link>
                    <Link  to={'/login'} className={`${pathname==='/login' ? 'text-primary' : ''}`}>Log In</Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default NavigationBar

