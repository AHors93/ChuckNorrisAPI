import React from 'react'
import axios from 'axios'

const InstaPosts = () => {
    const fetchPost = async () => {
        const response = await axios.get(`https://graph.instagram.com/17903462606037523?fields=id,media_type,media_url,username,timestamp&access_token=$`)
    } 
    return (
        <form>
            <h1>Posts</h1>
            
        </form>
    )
}