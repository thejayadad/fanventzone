import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { ThemeSwitcher } from '../ThemeSwitcher';
import Logo from '../Logo';


const TopNavbar = () => {
  return (
    <Navbar position="static isBordered">
        <NavbarBrand>
        <p className="font-bold text-inherit">
            <Logo />
        </p>
        </NavbarBrand>
        <NavbarContent justify="end">
            <ThemeSwitcher />
        </NavbarContent>
    </Navbar>
  )
}

export default TopNavbar