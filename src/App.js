import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { FaSoundcloud } from "react-icons/fa";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      {" "}
      <div className="flex justify-center text-white p-2 font-red-hat">
        <div className="p-2 hover:text-red-500">
          <Link to="/">Home</Link>
        </div>
        <div className="p-2 hover:text-red-500">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <footer className="bg-#282c34 text-gray-400 py-2">
          <div className="container mx-auto flex justify-center items-center">
            <div className="mr-4">
              <a
                href="https://www.linkedin.com/in/hashim-rafiq/"
                className="text-white hover:text-red-500 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  focusable="false"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <div className="mr-4">
              <a
                href="https://github.com/Hashim332"
                className="text-white hover:text-red-500 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  focusable="false"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            <div className="mr-4">
              <a
                href="https://soundcloud.com/hash_im1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSoundcloud
                  className="text-white hover:text-red-500 transition duration-300 ease-in-out"
                  size={24} // Adjust the size as needed
                />
              </a>
            </div>

            <div>// Hashim Rafiq © 2023</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
