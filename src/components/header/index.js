import React from 'react'

import './styles.scss';

function index() {
  return (
    <header className="header" data-test="header">
      <div className="container" data-test="container">
        <h1 class="title" data-test="title">React Unit Test with Jest</h1>
      </div>
    </header>
  )
}

export default index
