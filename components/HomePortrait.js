import React from 'react'
import monsterLg from "url:../assets/img/monster-lg.gif"
import monsterMd from "url:../assets/img/monster-md.gif"
import monsterSm from "url:../assets/img/monster-sm.gif" 

function Loading(props){

    return  (<div>
                <img src={monsterSm}
                     srcSet={monsterLg + "640w," +
                             monsterMd + "500w," +
                             monsterSm + "300w"}
                    sizes="(min-width: 720px) 640px,
                           (min-width: 520px) 500px,
                           300px"/>
             </div>);
}

export default Loading