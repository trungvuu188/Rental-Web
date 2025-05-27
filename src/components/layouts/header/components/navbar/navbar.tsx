import "./style.scss";

const navbarList = [
    {
        path: '/home',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About us'
    },
    {
        path: '/products',
        title: 'Products'
    },
    {
        path: '/membership',
        title: 'Membership'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
]

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__list">
                {
                    navbarList.map((item, idx) => (
                        <li className="navbar__item">{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Navbar;