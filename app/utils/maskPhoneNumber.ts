interface PhoneMaskParams {
  value: string;
  withBrackets?: boolean;
  positionBrackets?: {
    left: number;
    right: number;
  };
  positionSpaces?: number[];
  countDigits?: number;
}

const DIGIT_REGEX = /\d/;

export const maskPhone = ({
  value = '', 
  withBrackets = false,
  positionBrackets = { left: 2, right: 5 },
  positionSpaces = [2, 5, 8, 10],
  countDigits = 12,
}: PhoneMaskParams) => {
  let result = '+';

  for (let i = 0; i < Math.min(countDigits, value.length); i++) {
    const el = value[i];

    if (DIGIT_REGEX.test(el)) {
      if (i === positionBrackets.right && withBrackets) {
        result += ')';
      }
      
      if (positionSpaces.includes(i)) {
        result += ' ';
      }

      if (i === positionBrackets.left && withBrackets) {
        result += '(';
      }

      result += el;
    } else {
      return result;
    }
  }

  return result;
};

export const unMaskPhone = (params: PhoneMaskParams) => {
  return params.value.replace(/[^0-9]/g, '').slice(0, params.countDigits);
};
