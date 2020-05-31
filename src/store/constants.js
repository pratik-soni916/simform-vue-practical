export const MUTATIONS = ((prefix = "MUTATIONS") => ({
  SET_DATE: `${prefix}_SET_DATE`,
  SET_INGREDIENTS: `${prefix}_SET_INGREDIENTS`,
}))();

export const ACTIONS = ((prefix = "ACTIONS") => ({
  SET_DATE: `${prefix}_SET_DATE`,
  SET_INGREDIENTS_LOADING: `${prefix}_SET_INGREDIENTS_LOADING`,
  SET_INGREDIENTS_DATA: `${prefix}_SET_INGREDIENTS_DATA`,
  FETCH_INGREDIENTS_DATA: `${prefix}_FETCH_INGREDIENTS_DATA`,
}))();

export default {
  ACTIONS,
  MUTATIONS,
};
