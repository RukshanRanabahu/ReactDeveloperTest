import {
  RANDOM_PEOPLE_LIST,
  RANDOM_PEOPLE_LIST_CLEAR
} from './imageFilter.types';
import axios from 'axios';

export const getImageList = () =>
  async (dispatch) => {
    try {
      axios.get('https://randomuser.me/api/?results=3',
        // {
        //   results: 3,
        // }
      )
        .then(
          response => {
            console.log(
              'imageFilter :: getImageList :: response :: ' + JSON.stringify(response.data),
            );
            let { results } = response.data;
            dispatch({
              type: RANDOM_PEOPLE_LIST,
              payload: results
            });
          },
          error => {
            console.log('imageFilter :: getImageList :: error :: ' + error);
          },
        );
    } catch (error) {
      console.log('imageFilter :: getImageList :: error :: ' + error);
    }
  };

export const clearImageList = () => {
  return {
    type: RANDOM_PEOPLE_LIST_CLEAR,
  };
};