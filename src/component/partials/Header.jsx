import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <>
            <nav>
                <Link to ='/'>Home</Link> {' | '}
                <Link to ='/about'>About</Link> {' | '}
                <Link to ='/blog'>Blog</Link> {' | '}
                <Link to ='/projects'>Projects</Link> {' | '}
                Social Media 
            </nav>
        </>
     );
}
 
export default Header;