import Sidebar from "../../components/layouts/Sidebar";
import Navbar from "../../components/layouts/Navbar";

export default function Perfil() {
    return (
        <>
            <Sidebar />
            <section className="home-section">
                <Navbar />
                <div className="home-content">
                    <h1>Profile</h1>
                    <p>Batata</p>
                </div>
            </section>
        </>
    );
}