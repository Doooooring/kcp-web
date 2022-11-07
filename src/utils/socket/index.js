/**import axios from 'axios'
import {useRef, useEffect} from 'react'
import { ApiHostSocket } from '../asset/image/url/urls'
import io from "socket.io-client"

function ContainerSocket(containerId) {
    const socketIO = io(`${ApiHostSocket}?id=${containerId}`)
    //get state continually
    socketIO.on("connect", (state) => {

    })

    socketIO.on("")

   
   
}


export default ContainerSocket*/
