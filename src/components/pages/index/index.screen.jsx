  
import React from 'react';
import {
  Link,
} from 'react-router-dom';

function IndexScreen() {
  return (
    <div>
	    <h1>
			   IndexScreen
	    </h1>
	     <Link to='/artists'>artists</Link>
    </div>
  );
}

export default IndexScreen;