import { useState, useEffect } from "react"


function Filter({setFilter}){

    const [radio, setRadio] = useState('all')

    function getValue(event){
        return event.target.value;
    }

    useEffect(()=> {
        setFilter(radio)
    }, [radio])

    function handleClcik(event){
        setRadio(getValue(event))
        
    }

    return   <form action="#" className="form-row">
        <p>
            <label>
            <input name="group1" value='' onChange={handleClcik} onClick={handleClcik} type="checkbox" checked={radio ===''? true: false} />
                <span>all</span>
            </label>
        </p>
        <p>
            <label>
                <input name="group1" value='movie' onChange={handleClcik} onClick={handleClcik} type="checkbox" checked={radio ==='movie'? true: false} />
                <span>films</span>
            </label>
        </p>
        <p>
            <label>
            <input  name="group1" value='series' onChange={handleClcik} onClick={handleClcik} type="checkbox" checked={radio ==='series'? true: false} />
            <span>serials</span>
            </label>
        </p>
            
      </form>
      
    
    
}

export { Filter }