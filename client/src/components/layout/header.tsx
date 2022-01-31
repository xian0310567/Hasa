import 'reset.css';
import 'styles/layout/header.css';

const Header = () => {
    return (
        <header>
            <h1 id = "logo"><img src="/logo-kasa.svg" alt="logo" /></h1>
            <div id="information">
                <img style={{width:"27px"}} src="/alert.png" />
                <img style={{width:"23px"}} src="/user.png" />
            </div>
        </header>
    )
}

export default Header;