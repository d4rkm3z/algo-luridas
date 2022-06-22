/**
  1. Если текущее значение располагается в Map в качестве ключа,
  то это открывающий символ, следовательно, необходимо положить значение в стек

  2. Если текущее значение не проходит проверку на ключ в Map, значит - это
  закрывающий символ. Забираем верхнее значение в стеке и сравниваем с текущим значением

  3. Если по завершении стек не пустой, значит
  во входной строке есть несоответствие открывающих символов закрывающим
 */

const map: { [index: string]: string } = {
  '(': ')',
  '{': '}',
  '<': '>',
  '[': ']'
};

export function bracketsValidator(innerString: string) {
  const stack: string[] = [];

  for (const char of innerString) {
    if (map[char]) {
      stack.push(char);
    } else {
      const stackValue = stack.pop();

      if (!stackValue || map[stackValue] !== char) {
        return false
      }
    }
  }

  return !stack.length;
}

