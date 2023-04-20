const APIKey = 'A57Pj9cM1v5dqDXJogzxrJvLNDjWSSdrJ9TTwl2SU_wWrxoybin33gbKLsx971HbbXXvnTMsn0OxMG6bPfOCytBqOCpC-jWgybwSFubDfBZSJX8-G2WFaUPqjQZBZHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}?location=${location}&sort_by=${sortBy}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${APIKey}`
      }})
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          name: business.name,
          imageSrc: business.image_url,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
      }));
      }
    })
    .catch(error => console.log(error))
  }
}

export default Yelp;