import HowlMovingCastle from  'howlMovingCastle/HowlMovingCastle';
import PrincessMononoke from  'princessMononoke/PrincessMononoke';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Layout from './components/organisms/layout';

function App() {
  
  return (
    <>      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="howl-moving-castle" element={<HowlMovingCastle />} />
          <Route path="princess-mononoke" element={<PrincessMononoke />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" />
        </Route>
      </Routes>
    </>
  )
}

export default App
