import { useRouter } from 'next/router';
import UserProfile from '../components/profilePage/profilePage';

function ProfilePage() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div>
      <h1>User Profile</h1>
      {userId && <UserProfile userId={userId} />}
    </div>
  );
}

export default ProfilePage;
