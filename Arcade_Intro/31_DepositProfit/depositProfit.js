function depositProfit(deposit, rate, threshold) {
    var y = 0;
    var percentage = rate/100;
    
   while(deposit < threshold){
       deposit = deposit + (deposit * percentage);
       y++;
   }
    return y;
}