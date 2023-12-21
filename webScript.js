const searchButton = document.querySelector('#submit')

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();
  searchButton.addEventListener('click', async() => {
  const input = document.querySelector('#query').value;

  console.log(input);
  const url = `https://indonesian-identification-card-ktp.p.rapidapi.com/api/v3/check?nik=${input}`;
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
    const hasil = JSON.parse(result)
    // console.log(hasil);
    // console.log(hasil.results.parse_data.jenis_kelamin);
    document.querySelector('#nikName').innerHTML = `${hasil.results.realtime_data.findNikSidalih.nama}`;
    document.querySelector('.hasil').innerHTML = JSON.stringify(result, null, 2)
    // const hasilqr = await generateQr(result)
    // console.log(hasilqr);
    // document.querySelector("#qcode").innerHTML = hasilqr
    
  } catch (error) {
    console.error(error);
  }
});

// function generateQr (biodata) {
//   return fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${biodata}`)
//   .then((res) => {
//     if (!res.ok) {
//         throw new Error('ndak biso jadi qr');
//     }
//     return res.json();
// });
// }

// "{\"success\":true,\"message\":\"success\",\"results\":{\"realtime_data\":{\"findNikSidalih\":{\"nama\":\"MUHAMMAD FARILZI ABIYYU\",\"nik\":\"210203**********\",\"nkk\":\"210203**********\",\"provinsi\":null,\"kabupaten\":\"KARIMUN\",\"kecamatan\":\"KARIMUN\",\"kelurahan\":\"TANJUNG BALAI\",\"tps\":\"8\",\"alamat\":\"SD NEGERI 006 JL.PENDIDIKAN RT.006 RW.001 RT 6 RW 1\",\"lat\":\"0.9964266\",\"lon\":\"103.4280597\",\"metode\":\"TPS\",\"lhp\":[{\"nama\":\"MUHAMMAD FARILZI ABIYYU\",\"nik\":\"210203**********\",\"nkk\":\"210203**********\",\"kecamatan\":\"KARIMUN\",\"kelurahan\":\"TANJUNG BALAI\",\"tps\":\"8\",\"id\":\"142\",\"flag\":null,\"source\":\"DN\",\"alamat\":\"SD NEGERI 006 JL.PENDIDIKAN RT.006 RW.001 RT 6 RW 1\",\"lat\":\"0.9964266\",\"lon\":\"103.4280597\",\"metode\":\"TPS\"}]}},\"parse_data\":{\"nik\":2102030505050001,\"valid\":true,\"jenis_kelamin\":\"LAKI-LAKI\",\"tanggal_lahir\":\"05/05/2005\",\"usiaText\":\"18 Tahun 7 Bulan 13 Hari\",\"usiaValue\":{\"tahun\":18,\"bulan\":7,\"hari\":13},\"uniqe_code\":\"0001\",\"provinsi\":\"KEP. RIAU\",\"provinsi_id\":\"21\",\"kota_kabupaten\":\"KARIMUN\",\"kota_kabupaten_id\":\"21.02\",\"kecamatan\":\"KARIMUN\",\"kecamatan_id\":\"21.02.03\",\"kelurahan\":\"TANJUNG BALAI\",\"kelurahan_id\":\"21.02.03.1001\",\"kodepos\":\"29661\"}}}"

// {
//     "success": true,
//     "message": "success",
//     "results": {
//         "realtime_data": {
//             "findNikSidalih": {
//                 "nama": "MUHAMMAD FARILZI ABIYYU",
//                 "nik": "210203**********",
//                 "nkk": "210203**********",
//                 "provinsi": null,
//                 "kabupaten": "KARIMUN",
//                 "kecamatan": "KARIMUN",
//                 "kelurahan": "TANJUNG BALAI",
//                 "tps": "8",
//                 "alamat": "SD NEGERI 006 JL.PENDIDIKAN RT.006 RW.001 RT 6 RW 1",
//                 "lat": "0.9964266",
//                 "lon": "103.4280597",
//                 "metode": "TPS",
//                 "lhp": [
//                     {
//                         "nama": "MUHAMMAD FARILZI ABIYYU",
//                         "nik": "210203**********",
//                         "nkk": "210203**********",
//                         "kecamatan": "KARIMUN",
//                         "kelurahan": "TANJUNG BALAI",
//                         "tps": "8",
//                         "id": "142",
//                         "flag": null,
//                         "source": "DN",
//                         "alamat": "SD NEGERI 006 JL.PENDIDIKAN RT.006 RW.001 RT 6 RW 1",
//                         "lat": "0.9964266",
//                         "lon": "103.4280597",
//                         "metode": "TPS"
//                     }
//                 ]
//             }
//         },
//         "parse_data": {
//             "nik": 2102030505050001,
//             "valid": true,
//             "jenis_kelamin": "LAKI-LAKI",
//             "tanggal_lahir": "05/05/2005",
//             "usiaText": "18 Tahun 7 Bulan 13 Hari",
//             "usiaValue": {
//                 "tahun": 18,
//                 "bulan": 7,
//                 "hari": 13
//             },
//             "uniqe_code": "0001",
//             "provinsi": "KEP. RIAU",
//             "provinsi_id": "21",
//             "kota_kabupaten": "KARIMUN",
//             "kota_kabupaten_id": "21.02",
//             "kecamatan": "KARIMUN",
//             "kecamatan_id": "21.02.03",
//             "kelurahan": "TANJUNG BALAI",
//             "kelurahan_id": "21.02.03.1001",
//             "kodepos": "29661"
//         }
//     }
// }

