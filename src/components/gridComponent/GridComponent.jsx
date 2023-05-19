import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'


const GridComponent = () => {
  return (
    <Box sx={{backgroundColor: { xs: "orange", sm: "lightblue"},
    width: "100%", minHeight: "100vh"}}>
        <Grid container>

            <Grid item xs={12} sm={10} md={6}>
                <h2 style={{border: "2px solid red", width: "100%"}}>Hola</h2>
            </Grid>

            <Grid item xs={12} sm={10} md={6} >
                <h2 style={{border: "2px solid blue", width: "100%"}}>Hola</h2>
            </Grid>
          
        </Grid>
    </Box>
  )
}

export default GridComponent