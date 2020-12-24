import React from 'react'

export default function SidebarItem({name,active,handleClick}) {
    return (
       <button 
       onClick={handleClick}
       className={`sidebar-item ${active ? `active` : ``}`}>{name}</button>
    )
}
