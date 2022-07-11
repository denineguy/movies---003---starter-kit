const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '41806607',
            s: searchTerm
        }
    });

    return response.data.Search;
};

const input = document.querySelector('input');


let timeoutId;
const onInput = async event => {
    const movies = await fetchData(event.target.value);
    console.log(movies);
};

input.addEventListener('input', debounce(onInput, 500) );
