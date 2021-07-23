import createDataContext from './createDataContext';


const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      // create a new array with the newly added post in it
      return [...state, { title: action.payload.title, body: action.payload.body, id: state.length + 1 }];
    case 'delete_blogpost':
      // filter out the given id and return all others
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map((post)=>{
          // if id is found, return the new post, else return the old ones
          return post.id===action.payload.id ? action.payload : post;
      });
    default: return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, body) => {
    dispatch({ type: 'add_blogpost', payload: { title, body } });
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, body) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, body } });
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
      body: 'Body 1',
      id: 1
    },
    {
      title: 'Post 2',
      body: 'Body 2',
      id: 2
    }
  ]);