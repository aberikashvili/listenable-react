import { Box } from "@mui/material"
import Sidebar from "../sidebar/sidebar"
import Demographics from "../Demographics"


function Dashboard() {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Sidebar/>
        <Demographics/>
    </Box>
  )
}

export default Dashboard