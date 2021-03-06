import {
  UPDATE_POSTS,
  UPDATE_SORT,
  TOGGLE_FILTERS,
  CHANGE_LAYOUT,
  UPDATE_TEXT_SEARCH,
  UPDATE_CURRENT_PAGE,
  UPDATE_NUMBER_OF_RESULTS_FOUND,
  UPDATE_RESULTS_PER_PAGE,
  UPDATE_IS_SEARCH_LOADING,
  UPDATE_IS_SEARCH_ERROR,
  UPDATE_PRICE_MAX,
  UPDATE_PRICE_MIN,
  UPDATE_ANY_PRICE,
  UPDATE_CONDITION,
  UPDATE_BOARD_TYPE,
  UPDATE_DISTANCE,
  UPDATE_ANY_LENGTH,
  UPDATE_DIMENSIONS_LENGTH_MIN_FT,
  UPDATE_DIMENSIONS_LENGTH_MAX_FT,
  UPDATE_DIMENSIONS_LENGTH_MIN_IN,
  UPDATE_DIMENSIONS_LENGTH_MAX_IN,
  UPDATE_ANY_WIDTH,
  UPDATE_DIMENSIONS_WIDTH_MIN,
  UPDATE_DIMENSIONS_WIDTH_MAX,
  UPDATE_ANY_DEPTH,
  UPDATE_DIMENSIONS_DEPTH_MIN,
  UPDATE_DIMENSIONS_DEPTH_MAX,
  UPDATE_ANY_VOLUME,
  UPDATE_DIMENSIONS_VOLUME_MIN,
  UPDATE_DIMENSIONS_VOLUME_MAX,
} from "../actions/types";

const initialState = {
  posts: [],
  isFiltersVisible: true,
  layout: "Gallery",
  sort: "Newest",
  currentPage: 1,
  resultsPerPage: 50,
  numberOfResultsFound: 0,
  isLoading: false,
  isError: true,
  textSearch: "",
  distance: 25,
  price: { any: true, min: null, max: null },
  length: { any: true, min_ft: null, max_ft: null, min_in: null, max_in: null },
  width: { any: true, min: null, max: null },
  depth: { any: true, min: null, max: null },
  volume: { any: true, min: null, max: null },
  boardType: [],
  condition: [],
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    //update fetched posts
    case UPDATE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    //update sort type
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    //toggle filter box
    case TOGGLE_FILTERS:
      return {
        ...state,
        isFiltersVisible: !state.isFiltersVisible,
      };
    //change layout view
    case CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };
    //text search bar
    case UPDATE_TEXT_SEARCH:
      return {
        ...state,
        textSearch: action.payload,
      };
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case UPDATE_NUMBER_OF_RESULTS_FOUND:
      return {
        ...state,
        numberOfResultsFound: action.payload,
      };
    case UPDATE_RESULTS_PER_PAGE:
      return {
        ...state,
        resultsPerPage: action.payload,
      };
    case UPDATE_IS_SEARCH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case UPDATE_IS_SEARCH_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    //price range
    case UPDATE_PRICE_MAX:
      return {
        ...state,
        price: {
          ...state.price,
          max: action.payload,
        },
      };
    case UPDATE_PRICE_MIN:
      return {
        ...state,
        price: {
          ...state.price,
          min: action.payload,
        },
      };
    case UPDATE_ANY_PRICE:
      return {
        ...state,
        price: {
          ...state.price,
          any: action.payload,
        },
      };
    //condition
    case UPDATE_CONDITION:
      return {
        ...state,
        condition: action.payload,
      };
    //board type
    case UPDATE_BOARD_TYPE:
      return {
        ...state,
        boardType: action.payload,
      };
    //distance
    case UPDATE_DISTANCE:
      return {
        ...state,
        distance: action.payload,
      };

    //dimensions
    case UPDATE_ANY_LENGTH:
      return {
        ...state,
        length: {
          ...state.length,
          any: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_LENGTH_MIN_FT:
      return {
        ...state,
        length: {
          ...state.length,
          min_ft: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_LENGTH_MAX_FT:
      return {
        ...state,
        length: {
          ...state.length,
          max_ft: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_LENGTH_MIN_IN:
      return {
        ...state,
        length: {
          ...state.length,
          min_in: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_LENGTH_MAX_IN:
      return {
        ...state,
        length: {
          ...state.length,
          max_in: action.payload,
        },
      };
    case UPDATE_ANY_WIDTH:
      return {
        ...state,
        width: {
          ...state.width,
          any: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_WIDTH_MIN:
      return {
        ...state,
        width: {
          ...state.width,
          min: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_WIDTH_MAX:
      return {
        ...state,
        width: {
          ...state.width,
          max: action.payload,
        },
      };
    case UPDATE_ANY_DEPTH:
      return {
        ...state,
        depth: {
          ...state.depth,
          any: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_DEPTH_MIN:
      return {
        ...state,
        depth: {
          ...state.depth,
          min: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_DEPTH_MAX:
      return {
        ...state,
        depth: {
          ...state.depth,
          max: action.payload,
        },
      };
    case UPDATE_ANY_VOLUME:
      return {
        ...state,
        volume: {
          ...state.volume,
          any: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_VOLUME_MIN:
      return {
        ...state,
        volume: {
          ...state.volume,
          min: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_VOLUME_MAX:
      return {
        ...state,
        volume: {
          ...state.volume,
          max: action.payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
