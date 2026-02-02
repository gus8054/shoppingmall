export type User = {
  id: number;
  username: string;
  displayName: string;
  email: string;
  profileImageUrl: string;
  description: string;
};
export type ApiContext = {
  apiRootUrl: string;
};
export type SigninParams = {
  username: string; // 사용자명
  password: string; // 비밀번호
};
export type Product = {
  id: number;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  blurDataUrl: string;
  price: number;
  condition: Condition;
  owner: User;
};
export type Condition = "new" | "used";
export type Category = "shoes" | "clothes" | "book";
