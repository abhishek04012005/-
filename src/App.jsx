import { createBrowserRouter, RouterProvider, Link, Routes, Route } from 'react-router-dom';

import Portfolio from './Pages/Portfolio';
import WebsiteWeddingPage from './Pages/RouterPages/WebsiteWeddingPage';
import BirthdayTemplatePage from './Pages/RouterPages/BirthdayTemplatePage';
import BirthdayWebsitePage from './Pages/RouterPages/BirthdayWebsitePage';
import WeddingTemplatePage from './Pages/RouterPages/WeddingTemplatePage';


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
      path: '/',
      element: <Portfolio />,
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
    },
    {
      path: '/wedding-website',
      element: <WebsiteWeddingPage  />,
    },
    // -------------------------------------
    {
      path: '/birthday-website',
      element: <BirthdayWebsitePage />,
    },
    {
      path: '/birthday-invitation',
      element: <BirthdayTemplatePage />,
    },
    {
      path: '/wedding-invitation',
      element: <WeddingTemplatePage />,
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;



