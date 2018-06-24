import React from 'react'
import Linkicon from '../Linkicon/Linkicon'
import Linktext from '../Linktext/Linktext'

export default class Link extends React.Component {
    render() {
        return (
            <a href="/about"> <Linkicon /> <Linktext /> </a>
        )
    }
}