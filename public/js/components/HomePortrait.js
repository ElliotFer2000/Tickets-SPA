import React from 'react'
import Box from '@material-ui/core/Box'


function HomePortrait(props){

    return  (<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <img src="HomePortrait-sm.77a8fdba.gif"
                     srcSet="HomePortrait-lg.8836630f.gif 640w,
                             HomePortrait-md.1c050355.gif 500w,
                             HomePortrait-sm.77a8fdba.gif 300w"
                    sizes="(min-width: 720px) 640px,
                           (min-width: 520px) 500px,
                           300px"/>
             </Box>);
}

export default HomePortrait