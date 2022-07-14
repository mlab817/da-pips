import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Container from "../../components/container/container.component";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />

      <main className="flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <Header />

        <Container>
          {children}
        </Container>

        <Footer />
      </main>
    </div>
  )
}

export default MainLayout