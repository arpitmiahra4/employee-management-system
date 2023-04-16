import { Box } from '@chakra-ui/react';
import AllRoutes from './Routes/routes';
import Nav from './Components/Navbar/Navbar';

function App() {
  return (
    <Box>
      <Nav />
      <AllRoutes />
    </Box>
  );
}

export default App;
