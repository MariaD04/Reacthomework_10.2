import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editService, cancelServiceField, removeService } from '../redux/actions/actionCreator'

export const List = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.list)
    const filter = useSelector((state) => state.filter)
    let filteredList = null

    const handleEdit = (item) => {
        dispatch(editService(item))
    }

    const handleRemove = (id) => {
        dispatch(removeService(id))
        dispatch(cancelServiceField())
    }

    if (filter.query) {
        filteredList = items.map((item) => {
            if (!item.name.startsWith(filter.query)) {
                return null
            }

            return (
                <li key={item.id}>
                    <div className='item-data'>{item.name} {item.price}</div>
                    <button className='button button-edit' onClick={() => handleEdit(item)}>✎</button>
                    <button className='button button-remove' onClick={() => handleRemove(item.id)}>✘</button>
                </li>
            )
        })
    }

    const list = items.map(item => {
        return (
            <li key={item.id}>
                <div className='item-data'>{item.name} {item.price}</div>
                <button className='button button-edit' onClick={() => handleEdit(item)}>✎</button>
                <button className='button button-remove' onClick={() => handleRemove(item.id)}>✘</button>
            </li>
        )
    })

    return (
        <div className='list-container'>
           <ul>
            {filteredList || list}
           </ul> 
        </div>
    )
}

export default List