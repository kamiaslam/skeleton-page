import React from 'react'
import Listitem from '../Listitem/Listitem'

export default class UnorderedList extends React.Component {
    render() {
        return (
            <ul id="vertical-sidebar-nav" className="sf-menu sf-js-enabled sf-arrows">
                <Listitem />
            </ul>
        )
    }
}