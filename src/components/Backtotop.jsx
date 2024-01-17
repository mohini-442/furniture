import React from 'react'
import up from '../assets/images/top.png'

const Backtotop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className='container mx-auto px-3 max-w-[1150px]'>
                <div onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="fixed hidden bottom-[1%] right-[1%] z-30 translate-y-[0%] animate-bounce"
                    ref={scrollTop}
                ><div className=' cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear] shadow-[0px_10px_14px0px#313EF740]'>
                        <img src={up} alt="up" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default Backtotop