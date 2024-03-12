import Sidebar from "../../components/layouts/Sidebar";
import Navbar from "../../components/layouts/Navbar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <section className="home-section">
        <Navbar />
        <div className="home-content">
          <h1>Home</h1>
        </div>
      </section>
    </>
  );
}