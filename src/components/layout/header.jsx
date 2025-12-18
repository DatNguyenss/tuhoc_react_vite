import './header.css'

const Header = () => {
    return (
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/user">user</a></li>
            <li><a href="/products">product</a></li>
        </ul>

    )
}

export default Header;