import React, {PureComponent} from 'react';
import Article from '../Article';
import './style.css'

export default class ArticleList extends PureComponent{

    render(){
        console.log('---','render ArticlesList')
        const articleElements = this.props.articles.map((article, index) =>
            <li key = {article.id} className='article-list__li' >
                <Article article = {article} defaultOpens = {index === 0}/>
            </li>
            )
            return (
                <il>
                    {articleElements}
                </il>
            )
        }
    
}

//export default ArticleList

/*export default function ArticleList({ articles }){
    const articleElements = articles.map((article, index) =>
        <li key = {article.id} className='article-list__li' >
            <Article article = {article} defaultOpens = {index ===0}/>
        </li>
    )
    return (
        <il>
            {articleElements}
        </il>
    )
}*/