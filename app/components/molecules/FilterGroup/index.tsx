import { ChangeEventHandler } from "react";
import Text from "@/app/components/atoms/Text";
import Box from "@/app/components/layout/Box";
import CheckBox from "@/app/components/molecules/CheckBox";
import theme from "@/app/theme";

type ItemType = {
  label: string;
  name: string;
};
type FilterGroupProps = {
  title: string;
  items: ItemType[];
  value?: string[];
  onChange?: (values: string[]) => void;
};
/**
 * 필터 그룹
 * 여러 개의 체크박스를 관리하는 컴포넌트
 */
const FilterGroup = ({
  title,
  items,
  value = [],
  onChange,
}: FilterGroupProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const targetName = e.target.name;
    const isChecked = e.target.checked;

    let newSelected: string[] = [];
    if (isChecked) {
      newSelected = [...value, targetName];
    } else {
      newSelected = value.filter((itemName) => itemName !== targetName);
    }
    onChange?.(newSelected);
  };

  return (
    <>
      <Text variant="medium" style={{ fontWeight: "bold" }}>
        {title}
      </Text>
      <Box style={{ marginTop: `${theme.space.medium}px` }}>
        {items.map(({ label, name }, idx) => {
          const marginTopValue =
            idx === 0 ? theme.space.extraSmall : theme.space.medium;
          return (
            <Box key={name} style={{ marginTop: `${marginTopValue}px` }}>
              <CheckBox
                name={name}
                label={label}
                onChange={handleChange}
                checked={value?.includes(name)}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default FilterGroup;
