import React from 'react'
import style from '../scss/components/NotFoundPage.module.scss'
const NotFoundPage= ()=> {
  return (
    <div className={style.root}>
      <h1>
        <span> 😕 </span>
        <br />
        Ничего не найдено
      </h1>
    </div>
  )
}

export default NotFoundPage