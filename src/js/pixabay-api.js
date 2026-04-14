export const getImagesByQuery = query => {
  const params = new URLSearchParams({
    key: '55427334-75cc24dd7c9d859437f7d1aed',
    q: query.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};