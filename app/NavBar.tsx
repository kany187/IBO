import { Box, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <List display='flex' gap='3' justifyContent='flex-end' pt='5' pr='5'>
        <Link href='#about'><ListItem color='white'>About</ListItem></Link>
        <Link href='#work'>
        <ListItem>Work</ListItem>
        </Link>
      
        <Link href='#contact'>
        <ListItem>Contact</ListItem>
        </Link>
      
      </List>
    </nav>
  );
};

export default NavBar;
