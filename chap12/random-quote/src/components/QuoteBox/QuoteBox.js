import React, { Component } from 'react';
import './QuoteBox.css'
import axios from "axios"

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      author: '',
      status: 'idle',
    }
  }

  componentDidMount() {
    this.fetchQuote()
  }

  //  fetchQuoteTagAction = async () => {
  //   try {
  //     const { tagAction } = this.props
  //     if (tagAction !== '') {

  //       this.setState({ status: "loading" });
  //       const res = await axios.get(`https://api.quotable.io/random?tags=${tagAction}`)
  //       const quote = res.data
  //       this.setState({
  //         content: quote.content,
  //         author: quote.author,
  //         status: 'done'
  //       })
  //     }
  //   } catch (error) {
  //     this.setState({ status: "error" });

  //   }

  // }

  fetchQuote = async () => {
    try {
      this.setState({ status: "loading" });
      const res = await axios.get('https://api.quotable.io/random')
      const quote = res.data
      this.setState({
        content: quote.content,
        author: quote.author,
        status: 'done'
      })
    } catch (error) {
      this.setState({ status: "error" });

    }

  }

  handleClickQuote = () => {
    this.fetchQuote()
  }

  renderQuote() {
    const { status, content, author } = this.state
    if (status === 'loading' || status === 'idle') {
      return <div>Loading...</div>
    }

    if (status === 'error') {
      return <div>Something went wrong</div>
    }

    return (
      <>
        <div className="Quote-content">{content}</div>
        <div className="Quote-author">- {author}</div>
      </>
    )
  }

  renderQuoteTagAction() {
    const { status, content, author } = this.state
    if (status === 'loading' || status === 'idle') {
      return <div>Loading...</div>
    }

    if (status === 'error') {
      return <div>Something went wrong</div>
    }

    return (
      <>
        <div className="Quote-content">{content}</div>
        <div className="Quote-author">- {author}</div>
      </>
    )
  }

  render() {
    const { activeColor } = this.props
    return (
      <div className="Quote-Box" style={{ color: activeColor }}>
        {this.renderQuote()}
        <div className="Quote-action">
          <button
            className="Quote-new-btn"
            style={{ backgroundColor: activeColor }}
            onClick={this.handleClickQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    )
  }
}