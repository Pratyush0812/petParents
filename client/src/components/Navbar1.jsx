import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar1() {
    const navigate = useNavigate()
    return (
        <div>

            <nav className="bg-white border-gray-200 dark:bg-primaryBrown">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qhQOQfo0YnKJSx91Ms_Q9WDusuW9kzevkbm7n0I3Z7TUhXS5SXHHFooUKQeiG9nCOlzJImpRjzNGc6uqKZijN24aWk=s2560" class="h-20 mr-2" alt="PetParent"/>
                    </a>
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-lund rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-darkCream" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="" data-dropdown-placement="bottom" onClick = {()=>{navigate('/login')}}>
                            <span className="sr-only">Open user menu</span>
                            <img className="w-14 h-14 rounded-full" src="https://media.licdn.com/dms/image/C4D03AQFoLHm9QKSDPA/profile-displayphoto-shrink_800_800/0/1652897687806?e=2147483647&v=beta&t=kI1lQEY8P03iKJQm-AulYuo2SBZpRx6Iecl5FnPI_0M" alt="user photo" />
                        </button>

                        <div className="z-50 hidden my-4 text-base list-none bg-lund divide-y divide-gray-100 rounded-lg shadow dark:bg-lund dark:divide-primaryBrown" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-primaryBrown">Ritwij Kashyap</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-primaryBrown">ritwijkp@gmail.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-darkCream dark:hover:bg-darkCream dark:text-primaryBrown dark:hover:text-primaryBrown">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-darkCream dark:hover:bg-darkCream dark:text-primaryBrown dark:hover:text-primaryBrown">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-darkCream dark:hover:bg-darkCream dark:text-primaryBrown dark:hover:text-primaryBrown">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-darkCream dark:hover:bg-darkCream dark:text-primaryBrown dark:hover:text-primaryBrown">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                        <div class="relative hidden md:block">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-primaryBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-lund dark:border-gray-600 dark:placeholder-primaryBrown dark:text-primaryBrown dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar1;