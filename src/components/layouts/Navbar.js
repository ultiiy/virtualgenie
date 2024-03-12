export default function Navbar() {
    const nomeUser = "Nome de usuario";
    return (
        <nav>
            <div className="sidebar-button">
                <i className="bx bx-menu sidebarBtn"></i>
                <span className="dashboard"></span>
            </div>

            <div className="search-box">
                <input type="text" placeholder="Procurar..." />
                <i className="bx bx-search"></i>
            </div>

            <div className="d-flex align-items-center">
                <i className='bx bx-bell me-3 fs-3'></i>
                <div className="profile-details">
                    <img src="https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg" alt="" />
                    <span className="admin_name"> {nomeUser} </span>
                </div>
            </div>
        </nav>
    );
}
