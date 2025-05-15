import React, { FC } from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent: FC<Props> = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
