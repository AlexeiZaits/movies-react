import React from "react"

class Filter extends React.Component{

    constructor(props){
        super(props)
        this.getListMovies = props.getListMovies
        this.setFilter = props.setFilter
    }

    state = {
        all: true,
        films: false,
        serials: false,

    }

    handleChange = (event) => {
        if (event.target.value === 'all'){
            this.toggleRadio(true, false, false)
            this.setFilter('filter','')
            
        }
        else if (event.target.value === 'films'){
            this.toggleRadio(false, true, false)
            this.setFilter('filter','movie')
            
        }
        else{
            this.toggleRadio(false, false, true)
            this.setFilter('filter','series')
           
        }
        
    }

    toggleRadio = (all, films, serials) => {
        this.setState({all: all, films: films, serials: serials})
    }

    render(){
        const { all, films, serials } = this.state

        return   <form action="#" className="form-row">
            <p>
            <label>
                <input name="group1" value='all' onChange={this.handleChange} type="radio" checked={all} />
                <span>all</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" value='films' onChange={this.handleChange} type="radio" checked={films} />
                <span>films</span>
            </label>
            </p>
            <p>
            <label>
                <input  name="group1" value='serials' onChange={this.handleChange} type="radio" checked={serials} />
                <span>serials</span>
            </label>
            </p>
            
      </form>
      

        // return <form action="#">
        //     <p>
        //     <label>
        //         <input id="all" name="group1" type="radio" value="all" checked />
        //         <label for="all">all</label>
        //     </label>
        //     </p>
        //     <p>
        //     <label>
        //         <input id="films" name="group1" value="all" type="radio" />
        //         <label for="films">films</label>
        //     </label>
        //     </p>
        //     <p>
        //     <label>
        //         <input id="serials" name="group1" value="all" type="radio"  />
        //         <label for="serials">serials</label>
        //     </label>
        //     </p>
        // </form>
        
    }
    
}

export { Filter }