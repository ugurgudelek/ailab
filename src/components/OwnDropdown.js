import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'


const OwnDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown className="dropdown-own" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Menu
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem> <Link className="text-dark" to="/">Home</Link></DropdownItem>
        <DropdownItem> <Link className="text-dark" to="/about">About</Link> </DropdownItem>
        <DropdownItem> <Link className="text-dark" to="/team">Team</Link></DropdownItem>
        <DropdownItem> <Link className="text-dark" to="/projects">Projects</Link> </DropdownItem>
        <DropdownItem> <Link className="text-dark" to="/publications">Publications</Link></DropdownItem>
        <DropdownItem> <Link className="text-dark" to="/contact">Contact</Link> </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default OwnDropdown;