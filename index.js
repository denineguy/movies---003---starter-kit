const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '41806607',
            s: 'avengers'
        }
    });

    console.log(response.data);
};

fetchData();
