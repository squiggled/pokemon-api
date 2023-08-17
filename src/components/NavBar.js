import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="sm:shrink" id="navbar">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-mode="side"
        data-te-sidenav-content="#content"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-100">
          <ul className="space-y-2 font-medium">
            {/* Home */}
            <li>
              <NavLink to="/">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-400 hover:text-neutral-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span className="ml-3">Home</span>
                </div>
              </NavLink>
            </li>

            {/* favourites */}
            <li>
              <NavLink to="/favourites">
                <div className="flex items-center p-2 text-gray-900 rounded-lg   hover:bg-red-400 hover:text-neutral-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-pokeball"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                    <circle cx="9" cy="9" r="9" transform="translate(3 3)" />{" "}
                    <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" />{" "}
                  </svg>

                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Favourites
                  </span>
                </div>
              </NavLink>
            </li>
            {/* about */}
            <li>
              <NavLink to="/about">
                <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-400 hover:text-neutral-50 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    About
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default NavBar;
