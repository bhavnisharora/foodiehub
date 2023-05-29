import React from 'react'

const Menudata = (props) => {
  return (
 <>
      <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{props.id}</span>
                    <span className="card-author subtle">{props.name}</span>
                    <h2 className="card-title">{props.name}</h2>
                    <h3>{props.price}</h3>
                    <span className="card-description subtle">
                      {props.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={props.image} alt="" />
                  <span className="card-tag subtle">order now</span>
                </div>
              </div>
 </>
  )
}

export default Menudata
