const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment= document.querySelector('#post-title').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/post/:id`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/postdetails');
      } else {
        alert('Failed to create post');
      }
    }
  };

  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);