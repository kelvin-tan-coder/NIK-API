const searchButton = document.querySelector('#search')




const url = 'https://indonesian-identification-card-ktp.p.rapidapi.com/api/v3/check?nik=5171041903640005';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '58de2fc459msh581b4ca6cac3383p157663jsnae729f0ea479',
		'X-RapidAPI-Host': 'indonesian-identification-card-ktp.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}