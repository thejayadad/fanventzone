import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { ThemeSwitcher } from '../ThemeSwitcher';


const TopNavbar = () => {
  return (
    <Navbar position="static border">
        <NavbarBrand>
        <p className="font-bold text-inherit">FITNESSZONE</p>
        </NavbarBrand>
        <NavbarContent justify="end">
            <ThemeSwitcher />
        </NavbarContent>
    </Navbar>
  )
}

export default TopNavbar