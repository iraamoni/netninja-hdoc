import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style = {{ background: theme.ui, color: theme.syntax }}>
        <h1>
            Context App
        </h1>
        <div onClick = {toggleAuth}>
            {isAuthenticated ? 'logged in': 'logged out'}:
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    )
}

export default Navbar;


/* class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context)
        return (
            <AuthContext.consumer> {(authContext) => (
                <ThemeContext.Consumer>{(context) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav style = {{ background: theme.ui, color: theme.syntax }}>
                            <h1>
                                Context App
                            </h1>
                            <div onClick = {toggleAuth}>
                                {isAuthenticated ? 'logged in': 'logged out'}:
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.consumer>
        )
    }
}

export default Navbar; */

