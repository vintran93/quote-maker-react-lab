import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  render() {

    // const quotesList = this.props.quotes.map((quote) => <QuoteCard key={quote.id} quote={quote}/>)

    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  // debugger;

  return {
    quotes: state.quotes
  }
}


export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);

// connect is a higher level component that exporting this quotes component to anywhere that wants to render it
// thing in second () is what the object is
// exporting quotes along with map that shows it connects to global state