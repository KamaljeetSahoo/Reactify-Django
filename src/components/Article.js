import React from 'react'
import { List } from 'antd';


const Article = (props) => {
    return (
        <div>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 4,
                }}
                dataSource={props.data}
                renderItem={item => (
                <List.Item key={item.title}>
                    <List.Item.Meta
                    title={<a href={`/${item.id}`}>{item.title}</a>}
                    description="some description"
                    />
                    {item.content}
                </List.Item>
                )}
            />
        </div>
    )
}

export default Article
