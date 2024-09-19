// полиндром

// 1. сделать все буквы маленькими
// 2. удалить пробелы и прочее - оставить только буквы - регулярное выражение

const isPalindrome = (str) => {
  const strToLowerCase = str.toLowerCase();
  const result = strToLowerCase.replace(/[^a-zа-яё]/g, "");

  console.log(str);
  //   let result = str.replace(/[^a-zA-Z]/g, "");

  console.log(result.split().join());
  const palindrome = result.split().reverse().join();

  // console.log(result);
  // console.log(palindrome);

  if (result === palindrome) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

isPalindrome("Hello, World! 123");
isPalindrome("Казак");
isPalindrome("А роза упала на лапу Азора");
