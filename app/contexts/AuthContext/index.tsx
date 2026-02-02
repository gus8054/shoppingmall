"use client";
import signin from "@/app/service/auth/signin";
import signout from "@/app/service/auth/signout";
import { ApiContext, User } from "@/app/types/data";
import React, { useContext } from "react";
import useSWR from "swr";

type AuthContextType = {
  authUser?: User; // 로그인한 유저 정보
  isLoading: boolean; // 로딩 중인가?
  signin: (username: string, password: string) => Promise<void>; // 로그인 함수 모양
  signout: () => Promise<void>; // 로그아웃 함수 모양
  // 데이터를 강제로 새로고침하는 함수(SWR 제공)
  mutate: (
    data?: User | Promise<User>,
    shouldRevalidate?: boolean,
  ) => Promise<User | undefined>;
};

type AuthContextProviderProps = {
  context: ApiContext;
  authUser?: User;
};

export const AuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
});

export const useAuthContext = (): AuthContextType =>
  useContext<AuthContextType>(AuthContext);

/**
 * 인증 컨텍스트 제공자
 * @param params 파라미터
 */
export const AuthContextProvider = ({
  context,
  authUser,
  children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  const { data, mutate, isLoading } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/me`,
  );

  // 로그인
  const signinInternal = async (username: string, password: string) => {
    await signin(context, { username, password });
    await mutate();
  };

  // 로그아웃
  const signoutInternal = async () => {
    await signout(context);
    await mutate();
  };

  return (
    <AuthContext.Provider
      value={{
        authUser: data ?? authUser,
        isLoading,
        signin: signinInternal,
        signout: signoutInternal,
        mutate,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
