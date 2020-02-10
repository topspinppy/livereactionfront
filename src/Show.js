import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import queryString from 'query-string'

export const Show = (props) => {
    let parsedString = queryString.parse(props.location.search)  
    let [ actions, setActions ] = useState({
        LIKE: 0,
        LOVE: 0,
        WOW: 0,
        HAHA: 0,
        SAD: 0,
        ANGRY: 0,
        THANKFUL: 0,
        PRIDE: 0
    })
    useEffect(() => {
        const socket = socketIOClient("http://localhost:9000/")
        socket.emit('tokens', { accessToken: parsedString.accesstoken , postid: parsedString.postid } )
        socket.on('update-reaction', (messageNew) => {
            setActions(messageNew)
        })
    }, [])
    return (
        <div>
            Like => { actions.LIKE } <br />
            Love => { actions.LOVE } <br />
            Wow => { actions.WOW } <br />
            Haha => { actions.HAHA } <br />
            Sad => { actions.SAD } <br />
            Angry => { actions.ANGRY } <br />
            THANKFUL => { actions.THANKFUL} <br />
            PRIDE => { actions.pride } <br />

        </div>
    )
}