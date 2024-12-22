import React from 'react';
import { useIsFetching } from 'react-query';

function LoadingScreen() {
  const isFetching = useIsFetching();
  console.log('Active queries:', isFetching);

  if (isFetching > 0) {
    return <div className='loading_div'>
        {/* Loading... */}
        <img src="assets/images/mini_eco_heart.png" alt="loading" className="loading_image" />
        </div>;
  }
  return null;
}

export default LoadingScreen;
