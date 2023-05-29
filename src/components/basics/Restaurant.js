import React, { useState } from 'react'
import './Style.css'
import { Menu } from './Menuapi'
import Menucard from './Menucard'
import Navbar from './Navbar'
const uniquelist = [...new Set(Menu.map((elem) => {
  return elem.category
})
), "All"]
// console.log(uniquelist)
const Restaurant = () => {
  const [data, setdata] = useState(Menu)
  const [list, setlist] = useState(uniquelist)

  const filteritem = (category) => {
    if (category === "All") {
      setdata(Menu)
      return

    }

    const updatelist = Menu.filter((elem) => {
      return elem.category === category
    })
    setdata(updatelist)
  }
  return (
    <>
      <Navbar filteritem={filteritem} list={list} setlist = {setlist}/>
      <Menucard data={data} />
    </>
  )
}

export default Restaurant
