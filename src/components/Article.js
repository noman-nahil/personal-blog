import React from 'react'
import Articles from './Articles'
import ArticlesContent from './Articles-contents'


const Article = ({ match }) => {
    const name = match.params.name
    const article = ArticlesContent.find((article) => article.name === name)
    if (!article) return <h1>Article Not Found</h1>
    const otherArticles = ArticlesContent.filter(article => article.name !== name)
    const otherart = otherArticles.map((x, index) => {
        return (
            <Articles article={x} key={index} />
        )
    })

    return (
        <div className='mb-20'>
            <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
                {article.title}
            </h1>
            {article.content.map((paragraph, index) => (
                <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
                    {paragraph}
                </p>
            ))}
            <hr />
            <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">Other Articles</h1>

            <div className="flex flex-wrap -m-4">
                {otherart}
            </div>
        </div>
    )
}

export default Article
