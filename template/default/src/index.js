import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

ExampleComponent.propTypes = {
  text: PropTypes.string.isRequired
}
