import BgHeading from "./bgheading";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import ItemList from "./itemlist";

function App() {
  return (
    <>
      <BgHeading />

      <main>
        <Header />
        <Sidebar />
        <ItemList />
      </main>

      <Footer />
    </>
  );
}

export default App;
