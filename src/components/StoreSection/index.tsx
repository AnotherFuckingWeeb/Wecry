import React, {useState, useEffect} from 'react';
import { IStoreSectionProps } from './StoreSectionPropsInterface'
import { StoreCard } from './StoreCard'
import { StoreLink } from './StoreLink'
import { Loading } from '../Loading'
import './style.css'

export const StoreSection = (props: IStoreSectionProps) : JSX.Element => {

    useEffect(() => {
        getCompanies();
    }, [])

    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getCompanies = async () : Promise<void> => {
        try {
            const url = `http://localhost:4000/featuredstores/category=${props.category}`

            setIsLoading(true);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            setCompanies(data.companies);
        
            setIsLoading(false);
        } 
        
        catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className='store-section'>
            <Loading isLoading={isLoading} />
            <div className='store-section-title' >
                <p>Featured Stores in <b>{props.category}</b></p>
                <StoreLink category={props.category} />
            </div>
            <div className='store-section-stores-container'>
                {
                    companies.map((company : any) : JSX.Element => {
                        return (
                            <StoreCard key={company.id} id={company.id} name={company.firstname} icon={company.profile_image} />
                        )
                    })
                }
            </div>
        </div>
    )
}