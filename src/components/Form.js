import React from 'react'
import axios from 'axios'
import {Form, Input, Button} from 'antd'
const FormItem = Form.Item;

const CustomForm = (props) => {

    console.log(props.articleId)
    const handleFormSubmit = (event, requestType, articleID) => {
        event.preventDefault()
        const title = event.target.elements.title.value
        const content = event.target.elements.content.value
        console.log(content, title)

        switch(requestType){
            case 'post':
                axios.post('http://localhost:8000/articles/create/', {title: title, content: content})
                .then(response => console.log(response))
                .catch(error => console.log(error))
                break
            case 'put':
                axios.put(`http://localhost:8000/articles/${articleID}/update/`, {title: title, content: content})
                .then(response => console.log(response))
                .catch(error => console.log(error))
                break
            default:
                break
        }
    }

    return (
        <div>
            <Form onSubmitCapture={(event) => handleFormSubmit(event, props.requestType, props.articleId)}>
                <FormItem label="Title">
                    <Input name="title" placeholder="Enter Title"/>
                </FormItem>
                <FormItem label="Enter content">
                    <Input name="content" placeholder="Enter Description"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">{props.btnText}</Button>
                </FormItem>
            </Form>
        </div>
    )
}

export default CustomForm
