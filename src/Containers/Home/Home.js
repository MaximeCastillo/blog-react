import React from 'react'
import Card from '../../Components/Card/Card'
import './Home.css'

export default function Home() {
  return (
    <>
      <h1 className="home-title">Tous les articles</h1>
      <div className="container-cards">
        <Card>
          <h2>Hello card</h2>
        </Card>
      </div>
    </>
  )
}
