import { createBrowserRouter, RouterProvider, Link, Routes, Route } from 'react-router-dom';

import Portfolio from './Pages/Portfolio';
import WeddingWebsite from './Pages/WeddingWebsite';
import BirthdayWebsite from './Pages/BirthdayWebsite';
import BirthdayTemplate from './Pages/BirthdayTemplate';
import WeddingTemplate from './Pages/WeddingTemplate';

// Custom 404 Page
const NotFound = () => (
  <div>
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/">Go back to Home</Link>
  </div>
);

const router = createBrowserRouter(
  [
    {
      path: '/-/',
      element: <Portfolio />,
    },
    {
      path: '/-/portfolio',
      element: <Portfolio />,
    },
    {
      path: '/-/weddingwebsite',
      element: <WeddingWebsite />,
    },
    // -------------------------------------
    {
      path: '/-/birthdaywebsite',
      element: <BirthdayWebsite />,
    },
    {
      path: '/-/birthdaytemplate',
      element: <BirthdayTemplate />,
    },
    {
      path: '/-/weddingtemplate',
      element: <WeddingTemplate />,
    },

    // -----------------------------------------
    {
      path: '*',
      element: <NotFound />,  // Handling undefined routes
    }
  ]
);

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <RouterProvider basename="/-" router={router} />


      {/* <Routes>
        <Route path="/-/" element={<Portfolio />} />
        <Route path="/-/portfolio" element={<Portfolio />} />
        <Route path="/-/weddingtemplate" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;



