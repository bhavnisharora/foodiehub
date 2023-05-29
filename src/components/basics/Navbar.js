import React from 'react'
import foodie from './foodie.png'
const Navbar = ({ filteritem, list }) => {
    return (
        <>
            <nav className="navbar">
                    <img src={foodie} alt="" style={{width:'250px'}}/>
                <div className="btn-group">
                    {
                        list.map((elem) => {
                            return (
                                <button className="btn-group__item" onClick={() => filteritem(elem)}> {elem}</button>
                                )
                            })
                        }
                    {/* <button className="btn-group__item" onClick={() => filteritem("lunch")}> Lunch</button>
          <button className="btn-group__item" >Evening</button>
          <button className="btn-group__item">Dinner</button>
        <button className="btn-group__item" onClick={() => setdata(Menu)}>All</button> */}

                </div>
            </nav>
        </>
    )
}

export default Navbar
