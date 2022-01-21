import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
    return (
        <div>
           <Menu inverted pointing vertical>
        <Menu.Item
          name='home'
         
        /> 
        <Menu.Item
          name='Job Positions'
          as={NavLink} 
          to="/jobtitles" 
        />
        <Menu.Item
          name='Job Seeker List' 
          as={NavLink} 
          to="/candidatelists"  
       />
        <Menu.Item
          name='Job Advertisement List' 
          as={NavLink} 
          to="/jobadvertisementlists" 
       />
        <Menu.Item
          name='Employer List'
          as={NavLink} 
          to="/employerlists" 
        />
        <Menu.Item 
        name="Create New Job Advertisement "
        as={NavLink} 
        to="/addjobadvertisements"
        />
      </Menu> 
        </div>
    )
}