function lastFridayOfMonth(year, month) {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const lastFriday = new Date(lastDayOfMonth);
    const findLastFriday = lastFriday.setDate(lastFriday.getDate() - ((lastFriday.getDay() + 2 )% 7 ));
    
    return new Date(findLastFriday); 
    
  }
  
  console.log(lastFridayOfMonth(2023, 8));