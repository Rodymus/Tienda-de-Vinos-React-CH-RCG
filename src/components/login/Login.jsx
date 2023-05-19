import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react"

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box sx={ { width: "100%", alignItems: "center", display: "flex", minHeight: "100vh", justifyContent: "center" }}>
        <TextField  label="Email" variant="outlined" color="secondary" />
        
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=> setShowPassword(!setShowPassword)}
                  edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
            label="Password"/>
        </FormControl>

        <Button variant="contained" size="medium" color="secondary" >Ingresar</Button>
    </Box>
  )
}

export default Login