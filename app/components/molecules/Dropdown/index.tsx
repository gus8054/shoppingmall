import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  Activity,
} from "react";
import styled from "styled-components";
import Text from "@/app/components/atoms/Text";
import Flex from "@/app/components/layout/Flex";
import theme from "@/app/theme";

const DropdownRoot = styled.div`
  position: relative;
  // height: 38px;
`;

// 드롭다운 형태
const DropdownControl = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid ${theme.colors.border};

  &[data-has-error="true"] {
    border-color: ${theme.colors.danger};
  }
  border-radius: 5px;
  outline: none;
  padding: 8px 52px 8px 12px;
  user-select: none;
  cursor: pointer;
`;

const DropdownValue = styled.div`
  color: ${theme.colors.text};
`;

// 드롭다운 플레이스홀더
const DropdownPlaceholder = styled.div`
  color: #757575;
  font-size: ${theme.fontSizes[1]};
  min-height: 20px;
  line-height: 20px;
`;

// 드롭다운 화살표의 형태
const DropdownArrow = styled.div`
  border-color: #222222 transparent transparent;
  border-width: 5px 5px 0;
  &[data-is-open="true"] {
    border-color: transparent transparent transparent;
    border-width: 0 5px 5px;
  }
  border-style: solid;
  position: absolute;
  right: 10px;
  top: 16px;
`;

const DropdownMenu = styled.div`
  background-color: #ffffff;
  border: 1px solid ${theme.colors.border};
  box-shadow:
    0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 10%),
    0px 3px 14px 2px rgb(0 0 0 / 12%);
  // box-sizing: border-box;
  border-radius: 5px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
`;

const DropdownOption = styled.div`
  padding: 8px 12px 8px 12px;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export type DropdownItemType = {
  value: string | number;
  label?: string;
};
type DropdownItemProps = {
  item: DropdownItemType;
};
const DropdownItem = ({ item }: DropdownItemProps) => {
  return (
    <Flex style={{ alignItems: "center" }}>
      <Text variant="small">{item.label ?? item.value}</Text>
    </Flex>
  );
};

interface DropdownProps {
  options: DropdownItemType[]; // DropdownOptionType[] 사용
  value?: string | number | null;
  name?: string;
  placeholder?: string;
  hasError?: boolean;
  onChange?: (item: DropdownItemType) => void;
}

const Dropdown = ({
  options,
  value,
  name,
  placeholder,
  hasError,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRootRef = useRef<HTMLDivElement>(null);
  const selectedItem = options.find((item) => item.value === value);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSelectValue = (item: DropdownItemType) => {
    setIsOpen(false);
    onChange?.(item);
  };
  const handleDocumentClick = useCallback((e: PointerEvent | TouchEvent) => {
    const element = dropdownRootRef.current;
    if (element && !element.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
      document.addEventListener("touchend", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("touchend", handleDocumentClick);
    };
  }, [isOpen, handleDocumentClick]);
  return (
    <DropdownRoot ref={dropdownRootRef}>
      <DropdownControl
        data-has-error={hasError}
        onClick={toggleDropdown}
        data-testid="dropdown-control">
        {selectedItem ? (
          <DropdownValue>
            <DropdownItem item={selectedItem} />
          </DropdownValue>
        ) : (
          <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>
        )}
        <input
          data-testid="dropdown-input"
          type="hidden"
          name={name}
          value={selectedItem?.value ?? ""}
        />
        <DropdownArrow data-is-open={isOpen} />
      </DropdownControl>
      <Activity mode={isOpen ? "visible" : "hidden"}>
        <DropdownMenu data-testid="dropdown-menu">
          {options.map((item) => {
            return (
              <DropdownOption
                key={item.value}
                onClick={() => handleSelectValue(item)}>
                <DropdownItem item={item} />
              </DropdownOption>
            );
          })}
        </DropdownMenu>
      </Activity>
    </DropdownRoot>
  );
};

export default Dropdown;
