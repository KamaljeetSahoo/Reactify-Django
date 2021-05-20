import React from 'react'
import ArticleListView from './containers/ArticleListView'
import ArticleDetail from './containers/ArticleDetailView'
import {Route} from 'react-router-dom'

const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/' component={ArticleListView}/>
            <Route exact path='/:articleID' component={ArticleDetail}/>
        </div>
    )
}

export default BaseRouter
