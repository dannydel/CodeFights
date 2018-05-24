function reverseParentheses(s) {
    if(!s.includes('(') || !s.includes(')')){
       return s;
   }else{
       var p1First = s.lastIndexOf('(');
       var p2First = s.indexOf(')', p1First);
       var rev = s.slice(p1First + 1, p2First);
       var rem = s.slice(p1First, p2First + 1);
       var ret = s.replace(rem, rev.split('').reverse().join(''));
       
       return reverseParentheses(ret);
   }
}