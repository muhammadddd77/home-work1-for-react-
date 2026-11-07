import "./header.css"

function Header() {
    return (
        <header className="header">
            <h2>BrandName</h2>

            <nav>
                <a href="">Home</a>
                <a href="">Product</a>
                <a href="">Pricing</a>
                <a href="">Contact</a>
            </nav>

            <div className="headerButtons">
                <button className="loginBtn">Login</button>
                <button className="memberBtn">Become a member →</button>
            </div>
        </header>
    )
}

export default Header