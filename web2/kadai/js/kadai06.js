{

  //get element from id
    const userName = document.querySelector('#user_name');
    const author_name = document.querySelector('#author_name');
    const product_url = document.querySelector('#product_url');
    const video_url = document.querySelector('#video_url');
    const product_category = document.querySelector('#product_category');
    const button = document.querySelector('[type=submit]');
    const description = document.querySelector('#description');


  //button add click event
    button.addEventListener('click',(event) => {
    console.log(userName.innerText);

    //remove session data
    sessionStorage.removeItem('user_name');
    sessionStorage.removeItem('author_name');
    sessionStorage.removeItem('product_url');
    sessionStorage.removeItem('video_url');
    sessionStorage.removeItem('product_category');
    sessionStorage.removeItem('description');


    event.stopPropagation();
    event.preventDefault();

    //element innerText save session
    sessionStorage.setItem('userName', userName.value);
    sessionStorage.setItem('author_name', author_name.value);
    sessionStorage.setItem('product_url', product_url.value);
    sessionStorage.setItem('video_url', video_url.value);
    sessionStorage.setItem('desription',description.value);
    sessionStorage.setItem('product_category', product_category.selectedIndex);
    console.log(sessionStorage);
    });

    
    if( sessionStorage ){

    //get session data
    const userName_session = sessionStorage.getItem('userName');
    const author_name_session = sessionStorage.getItem('author_name');
    const product_url_session = sessionStorage.getItem('product_url');
    const video_url_session = sessionStorage.getItem('video_url');
    const description_session = sessionStorage.getItem('description');
    const product_category_session = sessionStorage.getItem('product_category');

    //set session data
    userName.value = userName_session;
    author_name.value = author_name_session;
    product_url.value = product_url_session;
    video_url.value = video_url_session;
    description.value = description_session;
    product_category.selectedIndex = product_category_session;

    }

}