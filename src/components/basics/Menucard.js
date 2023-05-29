import React from 'react'
import Menudata from './Menudata'
const Menucard = ({ data }) => {
  //   const loremimg = "https://picsum.photos/200/300"
  // console.log(data);
  return (

    <>
      <section className="main-card--cointainer">
        {data.map((elem) => {
          const { id } = elem
          return (
            <>

              <Menudata key={id}{...elem} />
            </>
          )
        })}
      </section>
    </>
  )
}

export default Menucard
