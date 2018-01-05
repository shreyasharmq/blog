import React, { Component } from 'react';
import { Container, Input, TextArea, Button, Form, Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import moment from 'moment'

class App extends Component {
  state = {
    title: '',
    description: '',
    snippet: '',
    blogs: []
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleSnippetChange = (e) => {
    this.setState({
      snippet: e.target.value
    })
  }
  handleDesChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  addArticle = () => {
    //create a new article object
    if (this.state.title.length) {
      const newArticle = {
        id: Math.floor(Math.random() * 10000),
        title: this.state.title,
        snippet: this.state.snippet,
        description: this.state.description,
        time: Date()
      }

      this.resetArticle()
      this.setState({
        blogs: [
          ...this.state.blogs, newArticle
        ]
      })
    }

    //validate if the title is not blank

    //if all is well, append the new article to the blogs
  }
  resetArticle = () => {
    this.setState({
      title: '',
      description: '',
      snippet: ''
    })
  }
  deleteArticle = (articleToDelete) => {
    const index = this.state.blogs.indexOf(articleToDelete)
    //make a new list without that index
    const listBefore = this.state.blogs.slice(0, index)
    const listAfterIndex = this.state.blogs.slice(index + 1)
    const newList = [...listBefore, ...listAfterIndex]
    //pass new list to state
    this.setState({
      blogs: newList
    })
  }
  render() {
    return (
      <Container text>
        <header className="App-header">
          <h1 className="App-title">Welcome to Chiya's blog</h1>
        </header>
        <Form onSubmit={this.addArticle}>

          <Input placeholder='Enter title'
            onChange={this.handleTitleChange} value={this.state.title}
            type="text" fluid={true} /><br />

          <TextArea onChange={this.handleDesChange} value={this.state.description}
            placeholder='Tell us more' /><br /><br />

          <TextArea onChange={this.handleSnippetChange} value={this.state.snippet}
            autoHeight placeholder='Add snippet' /><br /><br />

          <Button primary basic type='submit'>Submit</Button>
        </Form>
        <br />
        <Card.Group>
          {this.state.blogs.map((blog) => <Card key={blog.id} fluid>
            <Card.Content>
              <Card.Header>
                {blog.title}
              </Card.Header>
              <Card.Meta>
                {moment(blog.time).fromNow}
              </Card.Meta>
              <Card.Meta>
                {blog.snippet}
              </Card.Meta>
              <Card.Description>
                {blog.description}
              </Card.Description>
            </Card.Content>
            <Button onClick={() => this.deleteArticle(blog)}> Delete </Button>
          </Card>)}

        </Card.Group>

      </Container>
    );
  }
}

export default App;
