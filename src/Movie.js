import React from 'react'

export default function Movie(props){
    console.log(props);
    return (
        <li className='list-group-item'>
            { props.item.title }
        </li>
    )
}