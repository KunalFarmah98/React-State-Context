import createDataContext from './createDataContext';


const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: action.payload.title, body: action.payload.body, id: state.length + 1 }];
    case 'delete_blogpost':
      return state.filter((blogPost)=> blogPost.id!==action.payload);
    default: return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, body) => { 
    dispatch({ type: 'add_blogpost', payload: {title,body} }); 
  }
}

const editBlogPost = (dispatch) => {
  return () => { 
    dispatch({ type: 'add_blogpost' }); 
  }
}

const deleteBlogPost = (dispatch) => {
  return id => { 
    dispatch({ type: 'delete_blogpost', payload: id }); 
  }
}

// creating Provider using createDataContext for automation
export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  [
    {
      title: 'Post 1',
      body: 'asasas',
      id: 1
    },
    {
      title: 'Post 2',
      body: 'asasadasdfsafa',
      id: 2
    }
  ]);