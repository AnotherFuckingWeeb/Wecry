import React from 'react';
import { ICategorySelectProps } from './CategorySelectPropsInterface'
import { categories } from '../../utils/categories';
import './style.css'

export const CategorySelect = (props: ICategorySelectProps) : JSX.Element => {
    return (
        <>
            { props.validate && <label style={{ fontSize: 11, color: 'white', backgroundColor: 'rgba(255, 0, 0, 0.5)', padding: 10, borderRadius: 3, marginBottom: 5}}>{props.validate}</label> }
            <div className={`category-select ${props.validate ? 'category-invalid' : ''}`}>
                <select name='category' placeholder='select a category' onChange={props.onChange} onFocus={props.onFocus} >
                    <option value="" selected disabled hidden >Select a category</option>
                    {
                        categories.map((category): JSX.Element => {
                            return <option value={category.name}>{category.name}</option>
                        })
                    }
                </select>
            </div>
        </>
    )
}