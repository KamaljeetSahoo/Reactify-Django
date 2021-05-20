import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card} from 'antd'
import CustomForm from '../components/Form'

const ArticleDetail = (props) => {

    const [article, setArticle] = useState({})
    
    useEffect(() => {
        const articleID = props.match.params.articleID;
        axios.get(`http://localhost:8000/articles/${articleID}`)
            .then(res => {
                setArticle(res.data)
                console.log(res.data)
            })
    }, [props.match.params.articleID])


    return (
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <CustomForm requestType="put" articleId={props.match.params.articleID} btnText="Update"/>
        </div>
    )
}

export default ArticleDetail
