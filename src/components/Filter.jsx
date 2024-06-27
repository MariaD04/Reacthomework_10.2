import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilterField } from '../redux/actions/actionCreator'

export const Filter = () => {

    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filter)

    const handleFilter = ({ target }) => {
        const { name, value } = target
        dispatch(changeFilterField(name, value))
    }

    return (
        <form className='form-filter-container'>
            <input 
                className='input' 
                name="query" 
                value={filter.query} 
                onChange={handleFilter} 
                placeholder='Поиск...'
                required 
            /> 
        </form>
    )
}

export default Filter