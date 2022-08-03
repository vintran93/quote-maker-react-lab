// export default (state = [{author: 'Vincent', content: 'My Book', votes: 0, id: 1}], action) => {
//   switch(action.type) {
//     case 'ADD_QUOTE':
//       return [...state, action.payload]// all the state in there already plus action.quote (payload)
//     case 'REMOVE_QUOTE':
//       return []
//     default:
//       return state;
//   }
  
// }

// export default (state = [{author: 'Vincent', content: 'My Book', votes: 0, id: 1}], action) => {
//   // let index;
//   // let quote;

//   switch (action.type) {

//     case 'ADD_QUOTE':
//       return state.concat(action.quote);

//     case 'REMOVE_QUOTE':
//       return state.filter(quote => quote.id !== action.quoteId);

//     case 'UPVOTE_QUOTE':
//       // index = state.findIndex(quote => quote.id === action.quoteId);
//       // quote = state[index];

//       // return [
//       //   ...state.slice(0, index),
//       //   Object.assign({}, quote, { votes: quote.votes += 1 }),
//       //   ...state.slice(index + 1)
//       // ];
//       return state.map(quote => {
//         return quote.id === action.quoteId ? {...quote, votes: quote.votes + 1} : quote
//         // if true, return quote as it is, not mutate state directly, except take votes object and return quote.votes + 1
//         // if false, return quote
//       })

//     case 'DOWNVOTE_QUOTE':
//       // index = state.findIndex(quote => quote.id === action.quoteId);
//       // quote = state[index];
//       // if (quote.votes > 0) {
//       //   return [
//       //     ...state.slice(0, index),
//       //     Object.assign({}, quote, { votes: quote.votes -= 1 }),
//       //     ...state.slice(index + 1)
//       //   ];
//       // }
//       // return state;
//       return state.map(quote => {
//         return quote.id === action.quoteId ? {...quote, votes: quote.votes - 1} : quote
//         // if true, return quote as it is, not mutate state directly, except take votes object and return quote.votes + 1
//         // if false, return quote
//       })

//     default: 
//       return state;
//   }
// }


// export default (state = [{author: 'Vincent', content: 'My Book', votes: 0, id: 1}], action) => {
export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: 
      return state;
  }
}