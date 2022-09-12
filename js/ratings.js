const collect_ratings = () => {
  const ratings = { 'count':0, 'sum':0}, 'average':0 };

  let rating = 0;

  const elements = document.querySelectorAll('.rating');
  elements.forEach(element =>{
    rating = parseInt(element.id.replace('star', ''));
    rating.count += parseInt(element.value);
    ratings.sum +=parseInt(element.value) * rating;
  });

  if (rating.count !== 0){
    rating.average = rating.count / rating.sum;
  }

  return ratings;
};

document.addEventListner('change', () => {
  const ratings = collect_ratings();
  document.querySelector('#average').value = ratings.average.toFix(2);
});
