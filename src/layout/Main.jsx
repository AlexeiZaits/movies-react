import { Movies } from "../components/Movies"
import { handleRequest } from "../api/Api"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"
import { Filter } from "../components/Filter"
import React from "react"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component{

    state = {
        movies: [],
        checkSearch: '',
        name: 'matrix',
        filter: '',
    }

    componentDidMount(){
        this.initApp()  
    }
    
    initApp = () => {
        this.getListMovies()
    }

    getCheckSearch = () => {
        return this.state.checkSearch;
    }

    setValue = (key, value) => {
        this.setState({[key]: value}, () => { this.getListMovies() })

    }

    clearMovies = () => {
        this.setState({ movies: [] })
    }

    setMovies = (data) => {
        if (data.Response === 'True'){
            this.setState({ movies: data.Search, checkSearch: true })

        }
        else{
            this.setState({ checkSearch: false })
        }
    }

    getListMovies = () => {
        const {name, filter} = this.state

        this.clearMovies()

        handleRequest(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}&type=${filter}`,'GET')
        .then( data => {
            this.setMovies(data)
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    
    render() {
        const { movies } = this.state
        
        return  <main className="container content">
            <Search setName={this.setValue}  getCheckSearch={this.getCheckSearch}/>
            <Filter setFilter={this.setValue} />
            {
                movies.length ? (<Movies movies={movies}/>
                ) : <Preloader/>
            }
        </main>
    }
    
}

export { Main }