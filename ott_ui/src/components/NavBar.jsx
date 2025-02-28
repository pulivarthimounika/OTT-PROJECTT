import React, { useState } from "react"; 
import { Navbar, Container, Nav } from "react-bootstrap"; 
import { BottomNavigation, BottomNavigationAction } from "@mui/material"; 
import { Home, PlayCircleOutline, AccountCircle, Archive, Download } from "@mui/icons-material"; 

function NavBar() {
    const [value, setValue] = useState(0);

    return (
      <>
        
        <Navbar expand="md" className="bg-dark text-white py-2 d-none d-md-flex">
          <Container>
            <Navbar.Brand className="text-white">Logo</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#" className="text-white"><Home /></Nav.Link>
              <Nav.Link href="#" className="text-white"><PlayCircleOutline /></Nav.Link>
              <Nav.Link href="#" className="text-white"><Archive /></Nav.Link>
              <Nav.Link href="#" className="text-white"><Download /></Nav.Link>
              <Nav.Link href="#" className="text-white">
                <AccountCircle sx={{ fontSize: 30 }} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  
        
        <Container fluid className="position-fixed bottom-0 start-0 w-100 bg-dark d-flex d-md-none">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            className="py-2 w-100"
            sx={{
              backgroundColor: "#121212",
              color: "white",
            }}
          >
            <BottomNavigationAction label="Home" icon={<Home />} sx={{ color: "white" }} />
            <BottomNavigationAction label="Videos" icon={<PlayCircleOutline />} sx={{ color: "white" }} />
  
            
            <div className="position-relative">
              <div
                className="position-absolute top-0 start-50 translate-middle p-2 rounded-circle bg-success shadow"
                style={{ width: "60px", height: "60px", border: "4px solid #121212" }}
              >
                <AccountCircle sx={{ fontSize: 40, color: "white" }} />
              </div>
            </div>
  
            <BottomNavigationAction label="Library" icon={<Archive />} sx={{ color: "white" }} />
            <BottomNavigationAction label="Downloads" icon={<Download />} sx={{ color: "white" }} />
          </BottomNavigation>
        </Container>
      </>
    );
}

export default NavBar;
