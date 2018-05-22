bool checkPalindrome(string inputString) {
 char[] s = inputString.ToCharArray();
 Array.Reverse(s);
 return inputString == new string(s) ? true : false;

}