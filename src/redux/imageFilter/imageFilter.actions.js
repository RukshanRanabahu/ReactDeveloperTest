import {
  RANDOM_PEOPLE_LIST,
} from './imageFilter.types';
import axios from 'axios';

export const getImageList = () =>
  async (dispatch) => {
    try {
      axios.get('https://randomuser.me/api/?page=1&results=3&seed=abc',
        {
          page: 1,
          results: 3,
          seed: "abc",
        }
      )
        .then(
          response => {
            console.log(
              'imageFilter :: getImageList :: response :: ' + JSON.stringify(response.data),
            );
            let { results } = response.data;
            return { type: RANDOM_PEOPLE_LIST, payload: results };
          },
          error => {
            console.log('imageFilter :: getImageList :: error :: ' + error);
          },
        );
    } catch (error) {
      console.log('imageFilter :: getImageList :: error :: ' + error);
    }

    return {
      type: RANDOM_PEOPLE_LIST,
    };
  }