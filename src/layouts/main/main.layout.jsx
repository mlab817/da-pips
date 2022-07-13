import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Sidebar from "../../components/sidebar/sidebar.component";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <section>
        <Sidebar />
        {children}
      </section>
      <Footer />
    </>
  )
}

export default MainLayout