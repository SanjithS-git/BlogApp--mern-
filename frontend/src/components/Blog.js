import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
function Blog({title,description,imageURL,userName,isUser,id}) {
  const navigate = useNavigate()
const handleEdit = (e) =>{
  navigate(`/myBlogs/${id}`)
}
  return (
    <div>
    {""}
    <Card sx={{ maxWidth: 469,margin:'auto',mt:2,padding:2,boxShadow:"5px 5px 10px #ccc",":hover:":{
        boxShadow:"10px 10px 20px #ccc"
    } }}>
    {isUser&&(
      <Box display="flex">
      <IconButton onclick={handleEdit}sx={{marginLeft:'auto'}}><ModeEditIcon/></IconButton>
      <IconButton onclick={this.handleDelete}><DeleteForeverIcon/></IconButton>
      </Box>
    )}
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         {userName} 
        </Avatar>
      }
    
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
  {description}
      </Typography>
    </CardContent>

  </Card>
    </div>
  )
}

export default Blog

