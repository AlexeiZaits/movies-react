
import React, { useEffect, useState } from "react";

function Search({setName, getCheckSearch}){
    
    const [search, setSearch] = useState('')


    useEffect(()=> {
        handleEvent()
    }, [search])

    const handleChange = (event) => {
        setSearch(event.target.value)
	}

    const handleEvent = () => {
        if (search === ''){
            setName('matrix');
        }
        else{
            setName(search);
        }
    }

    return <div className="row">
        <div className="col s12">
            <div className="input-field  inputSearch">
                <input id="email_inline" type="email" onChange={handleChange}  placeholder='Название фильма' value={search} name="search" className="validate"/>
                <span className="helper-text" data-error="wrong" data-success="right">{ getCheckSearch() === true ? 'Поиск выполнен': 'Поиск не выполнен'}</span>
                    
            </div>
            </div>
        </div>
    
}

export { Search }