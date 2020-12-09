import React from 'react'
import Box from '@material-ui/core/Box'
function Message({message}){
    return (<Box  pt={1} pb={1}>
                <p>{message}</p>
            </Box>);
}

export default Message