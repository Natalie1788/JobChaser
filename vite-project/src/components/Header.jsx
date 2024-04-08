import Navbar from "./Navbar"
import logo from "../images/logo.png"
import logoDark from "../images/logoDark.png"
import { useTheme } from "./ThemeContext"
import './App.css'



export default function Header() {
    const {isDark} = useTheme()
   
    return (
        <div className="header">
            <div className={`logoimg ${isDark ? "dark" : "light"}`} >
                
            </div>
            <Navbar />
        </div>
    ); 

    {/*return (
        <div className="header">
            <div>
                <img src={`(${isDark ? logo1 : logo})`} alt="logo" />
            </div>
            <Navbar />
        </div>
    );
}*/}

/*let src;
if (isDark) {
    src = logoDark;
} else {
    src = logo;
}

return (
    <div className="header">
        <div>
            <img src={src} alt="logo" />
        </div>
        <Navbar />
    </div>
);*/
}