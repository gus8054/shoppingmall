import { Controller, useForm } from "react-hook-form";
import Button from "@/app/components/atoms/Button";
import Input from "@/app/components/atoms/Input";
import Text from "@/app/components/atoms/Text";
import TextArea from "@/app/components/atoms/TextArea";
import Box from "@/app/components/layout/Box";
import Dropdown from "@/app/components/molecules/Dropdown";
import InputImages, { FileData } from "@/app/components/molecules/InputImages";
import { Category, Condition } from "@/app/types/data";
import theme from "@/app/theme";

export type ProductFormData = {
  image: FileData[];
  title: string;
  description: string;
  category: Category;
  condition: Condition;
  price: string;
};

interface ProductFormProps {
  onProductSave?: (data: ProductFormData) => void; // 게시 버튼을 클릭했을 때의 이벤트 핸들러
}

/**
 * 상품 게시폼
 */
const ProductForm = ({ onProductSave }: ProductFormProps) => {
  // React Hook Form 사용
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormData>();
  const onSubmit = (data: ProductFormData) => {
    onProductSave?.(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 상품 사진과 업로드 드롭존 */}
      <Box style={{ marginBottom: `${theme.space.mediumLarge}px` }}>
        <Box style={{ marginBottom: `${theme.space.medium}px` }}>
          <Text as="label" variant="mediumLarge" fontWeight="bold">
            상품 사진
          </Text>
        </Box>
        {/* 상품 이미지 입력 */}
        <Controller
          control={control}
          name="image"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputImages
              images={value ?? []}
              onChange={onChange}
              maximumNumber={1}
              hasError={!!error}
            />
          )}
        />
        {errors.image && (
          <Text
            color={theme.colors.danger}
            variant="small"
            style={{ paddingLeft: `${theme.space.small}px` }}>
            이미지는 필수입력 사항입니다.
          </Text>
        )}
      </Box>

      {/* 상품 정보 */}
      <Box style={{ marginBottom: `${theme.space.mediumLarge}px` }}>
        <Box style={{ marginBottom: `${theme.space.medium}px` }}>
          <Text as="label" variant="mediumLarge" fontWeight="bold">
            상품 정보
          </Text>
        </Box>
        <Box style={{ marginBottom: `${theme.space.small}px` }}>
          <Text as="label" variant="medium">
            제목
          </Text>
          {/* 상품 제목 입력 */}
          <Input
            {...register("title", { required: true })}
            name="title"
            type="text"
            placeholder="상품 제목"
            hasError={!!errors.title}
          />
          {errors.title && (
            <Text
              color={theme.colors.danger}
              variant="small"
              style={{ paddingLeft: theme.space.small }}>
              제목 입력은 필수입니다
            </Text>
          )}
        </Box>
        <Box style={{ marginBottom: `${theme.space.small}px` }}>
          <Text as="label" variant="medium">
            개요
          </Text>
          {/* 상품 개요 입력 */}
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextArea
                minRows={3}
                maxLength={5}
                placeholder="최고의 상품입니다!"
                hasError={!!error}
                value={value}
                onChange={onChange}
              />
            )}
          />
          {errors.description && (
            <Text
              color={theme.colors.danger}
              variant="small"
              style={{ paddingLeft: theme.space.small }}>
              개요 입력은 필수입니다
            </Text>
          )}
        </Box>
        <Box style={{ marginBottom: `${theme.space.small}px` }}>
          <Text as="label" variant="medium">
            카테고리
          </Text>
          {/* 카테고리 드롭다운 */}
          <Controller
            control={control}
            name="category"
            rules={{ required: true }}
            defaultValue="shoes"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: "shoes", label: "신발" },
                  { value: "clothes", label: "의류" },
                  { value: "book", label: "책" },
                ]}
                hasError={!!error}
                value={value}
                placeholder="카테고리를 선택해 주십시오"
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.category && (
            <Text
              color={theme.colors.danger}
              variant="small"
              style={{ paddingLeft: theme.space.small }}>
              카테고리 선택은 필수입니다
            </Text>
          )}
        </Box>
        <Box style={{ marginBottom: `${theme.space.small}px` }}>
          <Text as="label" variant="medium">
            상품 상태
          </Text>
          {/* 상품 상태 드롭다운 */}
          <Controller
            control={control}
            name="condition"
            rules={{ required: true }}
            defaultValue="used"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: "used", label: "중고" },
                  { value: "new", label: "신품" },
                ]}
                hasError={!!error}
                value={value ?? "used"}
                placeholder="Please select condition"
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.condition && (
            <Text
              color={theme.colors.danger}
              variant="small"
              style={{ paddingLeft: theme.space.small }}>
              상품 상태 입력은 필수입니다
            </Text>
          )}
        </Box>
        <Box>
          <Text as="label" variant="medium">
            가격(원)
          </Text>
          {/* 가격 입력 */}
          <Input
            {...register("price", { required: true })}
            name="price"
            type="number"
            placeholder="1000"
            hasError={!!errors.price}
          />
          {errors.price && (
            <Text
              color={theme.colors.danger}
              variant="small"
              style={{ paddingLeft: theme.space.small }}>
              가격의 입력은 필수입니다
            </Text>
          )}
        </Box>
      </Box>

      {/* 등록 버튼 */}
      <Button style={{ width: "100%" }} type="submit">
        등록
      </Button>
    </form>
  );
};

export default ProductForm;
