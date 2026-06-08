import { createBrowserRouter } from "react-router";

import App from "./App";
import Library from "./components/Pages/Library/Library"
import Search from "./components/Pages/Search/Search"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Library />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
