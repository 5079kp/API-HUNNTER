const initialState = {
  user: null,
  favorites: [],
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }

    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }

    default:
      return state
  }
}
