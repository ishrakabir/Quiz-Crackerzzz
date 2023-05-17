import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout></Layout>
    }
  ])
  return (
    <div className="App mx-10 md:mx-20 lg:mx-48 xl::mx-72">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
