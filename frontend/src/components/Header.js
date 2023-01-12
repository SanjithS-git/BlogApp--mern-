
import React, { useState } from 'react'
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography}from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Header() {
  const dispath = useDispatch
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)


  const [value,setValue] = useState();
  return (
  
  <AppBar
  position="sticky"
  sx={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 71%, rgba(0,212,255,1) 100%);"}}>
  
  <Toolbar>

  <Typography variant="h4">Blogs</Typography>

  {isLoggedIn &&<Box display ="flex" marginLeft={"auto"} marginRight="auto">

  <Tabs textColor="inherit" value={value} onChange={(e,Val)=>setValue(Val)}>

  <Tab LinkComponent={Link} to="/blogs" label="Allblogs" sx={{color:"white"}}/>

  <Tab LinkComponent={Link} to="/myBlogs" label="Myblogs" sx={{color:"white"}}/>
  <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" sx={{color:"white"}}/>

  </Tabs>

  </Box>}

<Box display="flex" marginLeft="auto">

{!isLoggedIn && 
  <>
  
  
  <Button 
variant="contained"  
LinkComponent={Link} to ="/auth" 
sx={{margin:1,borderRadius:3}} 
color='warning'
>Login
</Button>

<Button variant="contained" LinkComponent={Link} to ="/auth" sx={{margin:1,borderRadius:3}}color='warning'>Signup</Button>
</>

    }


{isLoggedIn && ( 
  <Button onclick={()=>dispath(this.authActions.login())}variant="contained" LinkComponent={Link} to ="/auth" sx={{margin:1,borderRadius:3}}color='warning'>Logout</Button>
 )}

</Box>
  </Toolbar>
  </AppBar>
  )
}

export default Header
