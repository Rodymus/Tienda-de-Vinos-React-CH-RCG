
import CartWidget from './CartWidget'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const NavBar = () => {
  return (
    <div>
    <h1>Tienda de Vinos</h1>

    <Box sx={{ minWidth: 60, maxWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel>
          Seleccione el vino
        </InputLabel>
        <NativeSelect autoWidth >
          <option>Tinto</option>
          <option>Blanco</option>
          <option>Rosado</option>
        </NativeSelect>
      </FormControl>
    </Box>

    <CartWidget />
    </div>
  )
}

export default NavBar