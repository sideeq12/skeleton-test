 import { useState, useEffect } from "react"
import SkeletonArticle from "../skeleton/skeletonArticle"

const Articles = ()=>{
    const [articles, setArticles] = useState(null)

    useEffect(()=>{
        setTimeout( async ()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setArticles(data)
        }, 5000) })

    return(
        <div className="articles">
            <h2>Articles</h2>
            {!articles && [1,2,3,4,5].map((n)=> <SkeletonArticle key={n} theme="dark" />) }
            {
                articles &&  articles.map( article => (
                    <div className="artcile" key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                        </div>
                ))
                
            }
        </div>
    )
}


export default Articles;