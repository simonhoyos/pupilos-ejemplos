import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Posts } from './components/Posts';
import { Post } from './components/Post';
import { Home } from './components/Home';

const router = createBrowserRouter([
  {
    element:<Home />,
    path:"/"
  },
  {
    element:<Posts />,
    path:"/posts"
  },
  {
    element:<Post />,
    path:"/post/:postId"
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
