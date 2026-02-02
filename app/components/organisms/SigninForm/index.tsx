import { useForm } from "react-hook-form";
import Button from "@/app/components/atoms/Button";
import Input from "@/app/components/atoms/Input";
import Text from "@/app/components/atoms/Text";
import Box from "@/app/components/layout/Box";
import theme from "@/app/theme";

export type SigninFormData = {
  username: string;
  password: string;
};

interface SigninFormProps {
  /**
   * 로그인 버튼을 클릭했을 때의 이벤트 핸들러
   */
  onSignin?: (username: string, password: string) => void;
}

/**
 * 로그인폼
 */
const SigninForm = ({ onSignin }: SigninFormProps) => {
  // React Hook Form 사용
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data;
    onSignin?.(username, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box style={{ marginBottom: `${theme.space.small}px` }}>
        {/* 로그인 사용자명 입력 */}
        <Input
          {...register("username", { required: true })}
          name="username"
          type="text"
          placeholder="사용자명"
          hasError={!!errors.username}
        />
        {errors.username && (
          <Text
            color={theme.colors.danger}
            variant="small"
            style={{ paddingLeft: `${theme.space.small}px` }}>
            사용자명은 필수입니다
          </Text>
        )}
      </Box>
      <Box style={{ marginBottom: `${theme.space.small}px` }}>
        {/* 로그인 비밀번호 입력 */}
        <Input
          {...register("password", { required: true })}
          name="password"
          type="password"
          placeholder="비밀번호"
          hasError={!!errors.password}
        />
        {errors.password && (
          <Text
            color={theme.colors.danger}
            variant="small"
            style={{ paddingLeft: `${theme.space.small}px` }}>
            비밀번호는 필수입니다
          </Text>
        )}
      </Box>
      <Button style={{ width: "100%" }} variant="primary" type="submit">
        로그인
      </Button>
    </form>
  );
};

export default SigninForm;
