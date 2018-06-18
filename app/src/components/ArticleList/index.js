import React, {Component} from 'react';
import Article from '../Article';
import './style.css'

class ArticleList extends Component{

render(){
    const  { articles } = this.props
    console.log('---', this.props);
    const articleElements = articles.map((article, index) =>
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

export default ArticleList

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