import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../../store/userSlice';
import './style.css';

export function HomePage() {
  const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchUserInfo());
  });

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <p>User name: {userInfo.userName}</p>
      </section>
    </div>
  );
}
