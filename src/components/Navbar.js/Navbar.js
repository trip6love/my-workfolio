function navBar ({ currentPage, handlePageChange}) {
    return(
        <ul className="nav">
            <li>
                <a href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-item-active' : 'nav-item'}
                >
                    About
                </a>
            </li>
            <li>
                <a href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-item-active' : 'nav-item'}
                >
                    Projects
                </a>
            </li>
            <li>
                <a href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-item-active' : 'nav-item'}
                >
                    Contact
                </a>
            </li>
        </ul>

    )
}

export default navBar;