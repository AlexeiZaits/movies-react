
import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.setName = props.setName;
        this.getCheckSearch = props.getCheckSearch
        // this.setState({ checkSearch: props.checkSearch })
    }

    state = {
        search : '',
    }


    handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value}, () => {
            this.handleEvent()
        })
	}

    handleEvent = () => {
        if (this.state.search === ''){
            this.setName('name', 'matrix');
        }
        else{
            this.setName('name', this.state.search);
        }
        // if (event.key === 'Enter' || event.type === 'click'){
        //     this.cb(this.state.search);
        // }
        
        

    }

    render(){
        const { search } = this.state
        const checkSearch = this.getCheckSearch()
        
        // onKeyDown={this.handleEvent}
        return <div className="row">
            <div className="col s12">
                <div className="input-field  inputSearch">
                    <input id="email_inline" type="email" onChange={this.handleChange}  placeholder='Название фильма' value={search} name="search" className="validate"/>
                    <span className="helper-text" data-error="wrong" data-success="right">{ checkSearch === true ? 'Поиск выполнен': 'Поиск не выполнен'}</span>
                    {/* <button className="btn waves-effect waves-light" onClick={this.handleEvent} >Submit
                        <i className="material-icons right">send</i>
                    </button> */}
                </div>
            </div>
        </div>
    }
}

export { Search }