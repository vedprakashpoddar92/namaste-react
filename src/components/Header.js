import Logo from "./Logo"
const Header = () => {
    return (
      <header className="header">
        <Logo />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header