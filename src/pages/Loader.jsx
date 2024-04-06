import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { PuffLoader } from 'react-spinners';

export const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker({
    area: props.area,
    delay: 0,
  });

  return (
    promiseInProgress && (
      <div className="spinner">
        <PuffLoader color="#36d7b7" size="45px"/>
      </div>
    )
  );
};
