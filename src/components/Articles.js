import React from 'react'
import { Link } from 'react-router-dom'

const Articles = (props) => {
    return (
        <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hodden">
                <Link to={`/article/${props.article.name}`}>
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={props.article.thumbnail}
                        alt='blog'
                    />
                </Link>
                <div className="p-6">
                    <Link to={`/article/${props.article.name}`}>
                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{props.article.title}</h3>
                    </Link>
                    <p className="leading-relaxed mb-3">{props.article.content[0].substring(0, 120)}..</p>
                    <div className="flex item-center flex-wrap">
                        <Link to={`/article/${props.article.name}`} className="text-indigo-500  border-2  inline-flex items-center md:mb-2 lg:mb-0 p-2">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
