import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AddArticle from './Containers/AddArticle/AddArticle';
import Article from './Containers/Article/Article';
import Contact from './Containers/Contact/Contact';
import Home from './Containers/Home/Home';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ecrire' element={<AddArticle />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/articles/:slug' element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
