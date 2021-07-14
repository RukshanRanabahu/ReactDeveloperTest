import {
  RANDOM_PEOPLE_LIST,
  RANDOM_PEOPLE_LIST_CLEAR,
  RANDOM_AGE_LIST,
  RANDOM_AGE_LIST_CLEAR,
} from './randomPeople.types';
import axios from 'axios';

export const getImageList = () =>
  async (dispatch) => {
    console.log('imageFilter :: getImageList');
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

            // clear age data
            dispatch({
              type: RANDOM_AGE_LIST_CLEAR,
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

export const calculateAge = (nameArray) =>
  async (dispatch) => {
    console.log('imageFilter :: calculateAge ', nameArray);
    try {
      axios.get('https://api.agify.io?', {
        params: {
          // example data :- name: ['michael', 'matthew', 'jane']
          name: nameArray
        }
      }
      )
        .then(
          response => {
            console.log('imageFilter :: calculateAge :: response :: ' + JSON.stringify(response.data));
            dispatch({
              type: RANDOM_AGE_LIST,
              payload: response.data
            });
          },
          error => {
            console.log('imageFilter :: calculateAge :: error :: ' + error);
          },
        );
    } catch (error) {
      console.log('imageFilter :: getImageList :: error :: ' + error);
    }
  };

export const clearImageList = () => {
  console.log('imageFilter :: clearImageList :: ');
  return {
    type: RANDOM_PEOPLE_LIST_CLEAR,
  };
};