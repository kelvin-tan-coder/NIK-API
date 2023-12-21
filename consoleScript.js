async function checkNIK() {
	const url =
		`https://indonesian-identification-card-ktp.p.rapidapi.com/api/v3/check?nik=5171041903640005`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "997232e3d5mshf98f4b617eba1a4p1ac59bjsn25c1368ff756",
			"X-RapidAPI-Host": "indonesian-identification-card-ktp.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

checkNIK();
