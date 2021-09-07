/// <reference types="Cypress" />

it("Example sending the GET request", () => {
  cy.request("https://next.privat24.ua/").then((response) => {
    console.log(response);
  });
});

it.only("Example sending the POST request", () => {
  const requestBody = {
    action: "info",
    phone: "+380686979712",
    amount: 50,
    currency: "UAH",
    cardCvv: "111",
    card: "4552331448138217",
    cardExp: "0524",
    xref: "a51d33c4d4583a5cfa5f75f8994531ed",
    _: 1631013787109,
  };

  const headersData = {
    cookie:
      "_ga=GA1.2.1192691242.1628773332; _gid=GA1.2.346925258.1631005047; pubkey=8969ee6e7b3774a10b5d337e30f575c3; fp=24; lfp=8/12/2021, 4:02:22 PM; pa=1631013727365.67020.6940993627975978next.privat24.ua0.31987909030588013+1",
  };

  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headersData,
  }).then((response) => {
    console.log(response.body);
  });
});
