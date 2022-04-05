import React from 'react';
import {NavLink} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide font-bold">RestaurantApp</p>
        <p className="mt-3 text-gray-600">Administra tu restaurante en las siguientes opciones: </p>

    <nav className="mt-10">
        <NavLink to="/" className={({isActive})=> (isActive ? "p-1 text-yellow-500 block hover:bg-yellow-500 hover:text-gray-900" : "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" )}>
        Ordenes
        </NavLink>
        <NavLink to="menu" className={({isActive})=> (isActive ? "p-1 text-yellow-500 block hover:bg-yellow-500 hover:text-gray-900" : "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" )}>
        Menu
        </NavLink>
    </nav>

      </div>
    </div>
  )
}
