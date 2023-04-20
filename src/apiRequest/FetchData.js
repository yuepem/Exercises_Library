export const apiOptions = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Key':'b03ed1ba0fmshdd7949d2f97fde2p11bc76jsnf02953138c54',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
}


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}



    