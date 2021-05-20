import React, {useState, useEffect} from 'react'
import Article from '../components/Article'
import axios from 'axios'
import CustomForm from '../components/Form'


const ArticleListView = () => {

    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8000/articles/')
            .then(res => {
                setArticles(res.data)
                console.log(res.data)
            })
    }, [])


    return (
        <div>
            <Article data={articles}/>
            <br></br>
            <h2>Add an Article</h2>
            <CustomForm requestType="post" articleId={null} btnText="Create"/>
        </div>
    )
}

export default ArticleListView
