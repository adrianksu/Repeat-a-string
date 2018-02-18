function repeatStringNumTimes(str, num) {
 var combStr = '';
  while (num > 0) {
    combStr += str;
    num--;
  }
return combStr;
}
repeatStringNumTimes("abc", 3);
