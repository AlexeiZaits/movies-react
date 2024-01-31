

function Movie({Title, Year, imdbId, Poster, Type}){
    
    
    return <div className="row search">
                <div className="col s12 m7" style={{width : '100%'}}>
                    <div className="card">
                            <div className="card-image">
                                { Poster !== 'N/A' ? <img src={Poster} alt="name"/>: 
                                <img src={'https://placehold.co/400x350'} alt="name"/> }
                                <span className="card-title"></span>
                            </div>
                            <div className="card-content card-info">
                                <p>{Title}</p>
                                <p>{Year}</p>
                            </div>
                            <div className="card-action" style={{padding : '6px 24px'}}>
                                <p>{Type}</p>
                            </div>
                    </div>
                </div>
            </div>
}

export { Movie }