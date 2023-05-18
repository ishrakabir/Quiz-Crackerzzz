
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Topics from '../src/Components/Topics/Topics'
import Statistics from './Components/Statistics/Statistics'
import Blog from './Components/Blog/Blog'
import { createContext, useState } from 'react';
import Quiz from './Components/Quiz/Quiz';
export const openContext = createContext('something');
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>,
        },
        {
          path: '/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<Quiz></Quiz>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);
  const [open, setOpen] = useState(true);
  return (
    <openContext.Provider value={[open, setOpen]}>
      <div className="App md:mx-20 lg:mx-48 xl::mx-72  ">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </openContext.Provider>
  );
}

export default App;
