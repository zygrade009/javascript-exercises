const getTheTitles = function(books) {
   let titles=[];
   let n=books.length;
   if(n===0) return titles;
   titles=books.map((book)=>{return book.title;});
   return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
