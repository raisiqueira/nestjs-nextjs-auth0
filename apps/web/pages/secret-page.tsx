import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function SecretPage({ user }) {
  return (
    <div>
      Hello, {user?.name}. <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
