import React from 'react'
import Listitem from '../Listitem/Listitem'
import UnorderedList from '../UnorderedList/UnorderedList';

export default class Sidebar extends React.Component {
    render() {
        return (
            <nav id="sidebar-nav">
                <UnorderedList />
            </nav>
        )
    }
}