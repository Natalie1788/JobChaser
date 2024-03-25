import Navbar from "./Navbar"
import logo from "../images/logo,png"

function Header() {
    return (
        <div className="header">
        <div className="logoimg">
            <img src= { logo } alt="logo" />
        </div>
        <Navbar/>
        <div/>
    )
}