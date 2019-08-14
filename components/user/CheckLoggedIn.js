import { useEffect } from 'react';
import Router from 'next/router';

function CheckLoggedIn() {
  useEffect(() => {
    Router.push('/signin');
  });

  return null;
}

export default CheckLoggedIn;
