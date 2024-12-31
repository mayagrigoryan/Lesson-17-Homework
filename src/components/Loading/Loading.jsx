import React from 'react'
import style from './Loading.module.css'

function Loading() {
  return (
    <div className={style.loading}>
        <img src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="" />
    </div>
  )
}

export default Loading