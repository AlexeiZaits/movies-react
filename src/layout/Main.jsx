import { Movies } from "../components/Movies"
import { handleRequest } from "../api/Api"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"
import { Filter } from "../components/Filter"
import { useState, useEffect } from "react"

const API_KEY = process.env.REACT_APP_API_KEY

function Main(){
    
    const [checkSearch, setCheckSearch] = useState('')
    const [name, setName] = useState('matrix')
    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])
    
    useEffect(()=> {
        getListMovies()

        return function clearMovies(){
            setMovies([])
        }
    }, [filter, name])


    const getCheckSearch = () => {
        return checkSearch;
    }

    
    const provideMovies = (data) => {
        if (data.Response === 'True'){
            setCheckSearch(true)
            setMovies(data.Search)
        }
        else{
            setCheckSearch(false)
        }
    }

    const getListMovies = () => {
        
        handleRequest(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}&type=${filter}`,'GET')
        .then( data => {
            provideMovies(data)
        })
        .catch(error => {
            console.error(error)
        })
        
    }
        
    return  <main className="container content">
        <Search setName={setName}  getCheckSearch={getCheckSearch}/>
        <Filter setFilter={setFilter} />
        {
            movies.length ? (<Movies movies={movies}/>
            ) : <Preloader/>
        }
        </main>   
}

export { Main }