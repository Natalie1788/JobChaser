import { createContext, useState, useContext } from "react";

//------------------------forTypeScript
/*interface IThemeContext {
isDark: boolean;
toggleTheme: () => void;
}*/

//export const ThemeContext = createContext<IThemeContext | undefined>(undefined) 


// ----------------------------------creating context----------------------
export const ThemeContext = createContext(undefined) 


//--------------------------------------- theme hook----------------------
export const useTheme = () => {
    const thcontext = useContext(ThemeContext)

    if (!thcontext) {
        throw new Error ("context error")
    }
    return thcontext;
}
// -----------------------------for Typescrpt
/*interface ThemeProviderProps {
    children: ReactNode
}*/

//-------------------------------------- hook wrapper-------------------------
export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
      setIsDark((prev)=>!prev)
    };

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}