import React from 'react'
import styles from './Link.module.css'

export const Link = ({ link, name }) => {
  return (
    <a href={link} className={`${styles.link}`}>{name}</a>
  )
}
