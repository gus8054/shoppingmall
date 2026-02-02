import { BREAKPOINTS } from "../theme/breakpoint";
import { ResponsiveStyleType, ResponsiveValue } from "../types/styles";

/**
 * 카멜 케이스 => 하이픈 케이스 변환 (ex: backgroundColor => background-color)
 * @param key 카멜 케이스 CSS 키
 * @returns 하이픈 케이스 CSS 키
 */
const toCamelToHypenKey = (key: string) =>
  key.replace(/([A-Z])/g, "-$1").toLowerCase();

/**
 * CSS 변수와 미디어쿼리 생성기
 * ex) color: var(--box-color);
 * --box-color: tomato;
 * media screen and (min-width:...){
 *  --box-color: green;
 * }
 * @param prefix // CSS 변수에서 --{prefix}-color
 * @param style  // 단일 값과 반응형 값을 포함한 객체 ex) {width: '10px', color: {base: tomato, sm: green, md: yellow, lg: black, xl: gray}}
 * @returns CSS 문자열
 */
export const generateMediaQueryStyle = (
  prefix: string,
  style: ResponsiveStyleType,
) => {
  // CSS 변수 선언을 담을 버퍼 (base는 미디어 쿼리 없음)
  const cssBuffer: Record<string, string> = {
    base: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
  };

  // 실제 속성 정의 (예: width: var(--prefix-width))
  let propertyCSS = "";

  for (const _camelCaseKey in style) {
    const camelCaseKey = _camelCaseKey as keyof typeof style;
    const value = style[camelCaseKey];

    // 값이 없으면 스킵
    if (value === undefined || value === null) continue;

    const hypenKey = toCamelToHypenKey(camelCaseKey);
    const cssVarName = `--${prefix}-${hypenKey}`;

    // 1. 공통: 속성에 CSS 변수 연결 (base에 작성)
    // 예: background-color: var(--flex-background-color);
    propertyCSS += `${hypenKey}:var(${cssVarName});`;

    // 2. 변수 값 할당 로직
    if (typeof value === "object") {
      // 반응형 객체인 경우 ({ base: 'red', sm: 'blue' })
      for (const _bp in value) {
        const bp = _bp as keyof ResponsiveValue;
        // 타입 가드 및 값 할당
        if (value[bp]) {
          // ✨ [버그 수정] value 대신 value[bp] 사용
          // ✨ [최적화] 객체 키로 바로 접근하여 if-else 제거
          cssBuffer[bp] += `${cssVarName}:${value[bp]};`;
        }
      }
    } else {
      // 일반 문자열인 경우 (base에만 할당)
      // 예: --flex-background-color: tomato;
      cssBuffer.base += `${cssVarName}:${value};`;
    }
  }

  // 3. 최종 CSS 조합 (내용이 있는 경우에만 미디어 쿼리 생성)
  let result = propertyCSS + cssBuffer.base;

  (Object.keys(BREAKPOINTS) as Array<keyof typeof BREAKPOINTS>).forEach(
    (bp) => {
      if (cssBuffer[bp]) {
        result += `@media screen and (min-width:${BREAKPOINTS[bp]}){${cssBuffer[bp]}}`;
      }
    },
  );

  return result;
};
