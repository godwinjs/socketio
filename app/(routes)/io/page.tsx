'use client'
import React from "react"
import { io } from "socket.io-client"

const Page = () => {

    // memorize this so it does'nt tunnel at every re-render
    const socket = React.useMemo(() => io('http://localhost:5001'), [])

    socket.on('connect', () => {
        console.log('Nextjs client is connected...')
    })

    socket.on('message', (data, id) => {
        console.log(data.data + " " + id)
    })

    return <div>Page</div>
}

export default Page