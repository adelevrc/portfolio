import {useEffect} from 'react'; 
import {useLocation} from 'react-router-dom'; 

// permet de remonter tout en haut de la page quand on change de page 
const ScrollTop = () => {
    const {pathname} = useLocation(); 

    useEffect(() => {
        window.scroll({
            top:0, 
            left:0
        })
    }, [pathname])   
    return null
}

export default ScrollTop; 