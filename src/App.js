// import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
// import Modern from './pages/Modern/Modern';

import './index.scss';

const App = () => {
  return (
    <div>
    <Layout />
  </div>
    // <>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="*" element={<Layout />} />
    //     </Route>
    //     <Route path='/modern' element={<Modern/>}/>
    //   </Routes>
    // </>
  );
};



export default App;


