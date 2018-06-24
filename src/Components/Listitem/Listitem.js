import React from 'react'
import Link from '../Link/Link'

export default class Listitem extends React.Component {
    myClick = (event) => {
        alert();
        event.preventDefault();
        alert(event.value);
    }
    render() {
        return (
            <li className="normal-item-pro current-menu-item">
                <Link />
            </li>
        )
    }
}

