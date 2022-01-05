import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import React from 'react';

export default function Web() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <div>
      <h1>Web app</h1>
      <React.Fragment>
        {user && (
          <React.Fragment>
            <p>Hello {user.name}</p>
            <Link href="/secret-page">Secret Page (SSR)</Link> {' - '}
            <Link href="/other-secret-page">Other Secret Page (CSR)</Link>{' '}
            {' - '}
            <a href="/api/auth/logout">Logout</a>
          </React.Fragment>
        )}
        {!user && (
          <div>
            <a href="/api/auth/login">Login</a> {' - '}
            <Link href="/secret-page">Secret Page (SSR)</Link> {' - '}
            <Link href="/other-secret-page">Other Secret Page (CSR)</Link>
          </div>
        )}
      </React.Fragment>
    </div>
  );
}
