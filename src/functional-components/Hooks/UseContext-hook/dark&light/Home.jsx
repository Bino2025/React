import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {

    const { darkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h1>{darkMode ? '🌑Dark Mode' : '☀Ligh Mode'} </h1>
            <button onClick={toggleTheme} style={{}}>Toggle Theme</button>
        </div>
    )
}

export default Home