import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function OtherSecretPage({ user }) {
  return (
    <div>
      Hello, {user?.name}. This is a CSR page.{' '}
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

export default withPageAuthRequired(OtherSecretPage);
