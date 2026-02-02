const fetcher = async <T>(
  requestInfo: RequestInfo,
  requestInit: RequestInit
): Promise<T> => {
  const res = await fetch(requestInfo, requestInit);
  if (res.ok) return res.json();
  const errorResult = await res.json();
  throw new Error(errorResult.message ?? "API 요청 중에 에러가 발생했습니다.");
};

export default fetcher;
