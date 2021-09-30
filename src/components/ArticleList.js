import React from 'react'
import articlesContent from './Articles-contents'
import Articles from './Articles'


const ArticleList = () => {
    const article = articlesContent.map((article, index) => {
        return (
            <Articles article={article} />
        )
    })
    // console.log(article)
    return (
        <div className='mb-20'>
            <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
                Articles
            </h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {article}
                </div>
            </div>
        </div>
    )
}

export default ArticleList
