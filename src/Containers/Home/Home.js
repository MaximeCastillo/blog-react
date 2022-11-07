import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../Components/Card/Card'
import './Home.css'
import { getArticles } from "../../redux/articles/articleReducer";
import { v4 as uuid } from 'uuid'

export default function Home() {
  const { articles } = useSelector(state => ({
    ...state.articleReducer
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if(articles.length === 0) {
      dispatch(getArticles())
    }
  }, [])

  return (
    <>
      <h1 className="home-title">Tous les articles</h1>
      <div className="container-cards">
        {articles.map(article => {
          return (
            <Card key={uuid()}>
              <h2>{article.title}</h2>
              <a href="#">Lire l'article</a>
            </Card>
          )
        })}
      </div>
    </>
  )
}
