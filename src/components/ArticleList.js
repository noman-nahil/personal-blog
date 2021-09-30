import React from 'react'
import { Link } from 'react-router-dom'
import articles from './Articles-contents'
const ArticleList = () => {
    const article = articles.map((article, index) => {
        return (
            <div className="p-4 md:w-1/2" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hodden">
                    <Link to={`/article/${article.name}`}>
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={article.thumbnail}
                            alt='blog'
                        />
                    </Link>
                    <div className="p-6">
                        <Link to={`/article/${article.name}`}>
                            <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{article.title}</h3>
                        </Link>
                        <p className="leading-relaxed mb-3">{article.content[0].substring(0, 120)}..</p>
                        <div className="flex item-center flex-wrap">
                            <Link to={`/article/${article.name}`} className="text-indigo-500  border-2  inline-flex items-center md:mb-2 lg:mb-0 p-2">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
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
/**className="p-4 md:w-1/2"
 className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hodden"
className="lg:h-48 md:h-36 w-full object-cover object-center"
<Link to={`/article/${article.name}`}>
                <img
                    src={article.thumbnail}
                    alt='blog'
                />
                <p>{article.title}</p>
            </Link>
 */