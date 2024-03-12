import Sidebar from "../../components/layouts/Sidebar";
import Navbar from "../../components/layouts/Navbar";

export default function Descobrir() {
    return (
        <>
            <Sidebar />
            <section className="home-section">
                <Navbar />
                <div className="home-content">
                    <h1>Descobrir</h1>
                    <p>Batata</p>
                </div>
            </section>
        </>
    );
}