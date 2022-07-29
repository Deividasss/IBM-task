import React, { useState } from "react"

const Search = (props) => {

    const [term, setTerm] = useState('')

    const handleChange = (e) => {
        setTerm(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.onSearch(term)
    }
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body" style={{backgroundColor:'#DEB887'}}>
                    <form onSubmit={submitHandler}>
                        <input
                            style={{backgroundColor:'#FFE4C4'}}
                            type="text"
                            placeholder="Patiekalo pavadinimas"
                            onChange={handleChange}
                            value={term}
                            className="form-control" />
                        <button className="btn btn-danger mt-2">Ieskoti</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Search