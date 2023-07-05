import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-primaryBrown">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" class="flex items-center">
                        <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qhQOQfo0YnKJSx91Ms_Q9WDusuW9kzevkbm7n0I3Z7TUhXS5SXHHFooUKQeiG9nCOlzJImpRjzNGc6uqKZijN24aWk=s2560" class="h-20 mr-2" alt="PetParent" />
                    </a>
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-darkCream" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-14 h-14 rounded-full" src="https://media.licdn.com/dms/image/C4D03AQFoLHm9QKSDPA/profile-displayphoto-shrink_800_800/0/1652897687806?e=2147483647&v=beta&t=kI1lQEY8P03iKJQm-AulYuo2SBZpRx6Iecl5FnPI_0M" alt="user photo" />
                        </button>

                        <div className="z-50 hidden my-4 text-base list-none bg-lund divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Ritwij Kashyap</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">ritwijkp@gmail.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
