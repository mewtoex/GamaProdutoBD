import { useCallback } from 'react';
import { Store } from 'react-notifications-component';

const useRequest = () => {

  const post = useCallback( (resource, body, callback, errorCallback) => {
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    };

     fetch(resource, options)
      .then((data) => data.json())
      .then((response) => {
        callback(response);
      })
      .catch((err) => {
        errorCallback(err);
      });
  }, [])


  const get = useCallback( (resource, callback, errorCallback) => {
    const options = {
      method: 'get',
      headers: { "Content-Type": "application/json" },
    };

     fetch(resource, options)
      .then((data) => data.json())
      .then((response) => {
        callback(response);
      })
      .catch((err) => errorCallback && errorCallback(err));
  }, [])

  return { post, get };
};

export default useRequest;