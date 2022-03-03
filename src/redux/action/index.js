export const ADD_TO_FAV = "ADD_TO_FAV"
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV"
export const SET_USER_NAME = "SET_USER_NAME"

export const addToFav = (company) => ({
  type: ADD_TO_FAV,
  payload: company,
})
export const removeFromFav = (company) => ({
  type: REMOVE_FROM_FAV,
  payload: company,
})
