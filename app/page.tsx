import { Box, Icon, Text } from "@chakra-ui/react";
import Header from "./Header";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


export default function Home() {
  return (
    <div>
      <Box 
      w='full'
      h='880'
      bgGradient='linear(to-t, 
        rgba(10, 14, 25, 1) 0%,
        rgba(164, 189, 209, 1) 69.2307710647583%,  84.61538553237915%, 
        rgba(38, 52, 78, 1) 100%
        )'
      color='white'
      >
      <NavBar />

      <Header />
      
      </Box>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
