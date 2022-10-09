import Footer from '../shared/components/Footer/Footer';
import Header from '../shared/components/Header/Header';
import MainContent from '../shared/components/MainContent/MainContent';
import News from '../shared/components/News/News';
import Pengumuman from '../shared/components/Pengumuman/Pengumuman';
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <News />
      <Pengumuman />
    </div>
  );
}

export default App;
