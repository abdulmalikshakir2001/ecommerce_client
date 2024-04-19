import { Button, Paper } from '@material-ui/core'
import React from 'react'


function Item(props) {
  return (
    <img src={props.item.name}  alt='image' className='carousel_img' />
    
  )
}

export default Item
