/* 
### Challenging

Console the value of email
Console the value of address 
Console the value of city
Console the value of lat
Console the value of company name 
*/


const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  
  const emailOfUser = user.email;
  const userAddres = user.address;
  const userCity = user.address.city;
  const userGeoLat = user['address']['geo']['lat'];
  const userCompany = user.company['name'];

  console.log(userAddres);
  const totalOutput = `
  1. User email is ${emailOfUser} 
  2. User address is ${userAddres}
  3. User city is ${userCity}
  4. User lat is ${userGeoLat}
  5. User company is ${userCompany}
  
  `;


  console.log(totalOutput);