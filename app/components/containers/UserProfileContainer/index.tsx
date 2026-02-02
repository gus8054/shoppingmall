"use client";
import useUser from "@/app/service/users/use-user";
import { ApiContext, User } from "@/app/types/data";
import UserProfile from "../../organisms/UserProfile";

// [필수] 1. 클라이언트 컴포넌트 선언

// API Context 설정
const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

interface UserProfileContainerProps {
  userId: number; // 사용자 ID
  user?: User; // 초기에 표시할 사용자 (SSR/ISR 데이터)
}

/**
 * 사용자 프로필 컨테이너
 * (Client Component - Container Role)
 */
const UserProfileContainer = ({ userId, user }: UserProfileContainerProps) => {
  // 최신 사용자 정보를 얻어 업데이트가 있을 때는
  // initial에 지정되어 있는 데이터를 덮어 쓴다 (SWR/React Query 패턴)
  const { user: _user } = useUser(context, { id: userId, initial: user });

  if (!_user) return <div>Loading...</div>;

  return (
    <UserProfile
      username={`${_user.username} (${_user.displayName})`}
      profileImageUrl={_user.profileImageUrl}
      numberOfProducts={100}
      description={_user.description}
    />
  );
};

export default UserProfileContainer;
