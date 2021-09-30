import React from 'react'
import Articles from './Articles-contents'

const Article = ({ match }) => {
    const name = match.params.name
    const article = Articles.find((article) => article.name === name)
    if (!article) return <h1>Article Not Found</h1>
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
        </div>
    )
}

export default Article
