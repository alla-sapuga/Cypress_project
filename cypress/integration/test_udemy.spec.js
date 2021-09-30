/// <reference types="Cypress" />

it("Example sending the GET request", () => {
  cy.request("https://next.privat24.ua/").then((response) => {
    console.log(response);
  });
});

//example HTTP POST request with expect verification of response

it.skip("Example sending the POST request", () => {
  const requestBody = {
    action: "info",
    phone: "+380686979712",
    amount: 50,
    currency: "UAH",
    cardCvv: "111",
    card: "4552331448138217",
    cardExp: "0524",
    xref: "bb267602308886544d75d48c846066b3",
    _: 1631023035104,
  };

  const headersData = {
    cookie:
      "_ga=GA1.2.1192691242.1628773332; _gid=GA1.2.346925258.1631005047; pubkey=56cf435d423d2181fc26956c4d906840; _gat_gtag_UA_29683426_11=1; lfp=8/12/2021, 4:02:22 PM; pa=1631023012798.17530.38544665382927956next.privat24.ua0.37053848089734887+1; fp=29",
  };

  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headersData,
  }).then((response) => {
    expect(response).to.have.property('status').to.equal(200)
    expect(response.body).to.have.property('status').to.equal('success')
    expect(response.body.data).to.have.property('amount').to.equal('50.0')

    console.log(response.body);
  });
});

//example HTTP POST request with should verification of response


it("Example sending the POST request", () => {
    const requestBody = {
      action: "info",
      phone: "+380686979712",
      amount: 50,
      currency: "UAH",
      cardCvv: "111",
      card: "4552331448138217",
      cardExp: "0524",
      xref: "bb267602308886544d75d48c846066b3",
      _: 1631023035104,
    };
  
    const headersData = {
      cookie:
        "_ga=GA1.2.1192691242.1628773332; _gid=GA1.2.346925258.1631005047; pubkey=56cf435d423d2181fc26956c4d906840; _gat_gtag_UA_29683426_11=1; lfp=8/12/2021, 4:02:22 PM; pa=1631023012798.17530.38544665382927956next.privat24.ua0.37053848089734887+1; fp=29",
    };
  
    cy.request({
      method: "POST",
      url: "https://next.privat24.ua/api/p24/pub/mobipay",
      body: requestBody,
      headers: headersData,
    }).its('body').should('contain', {
        status: 'success'

    }).its('data').should('contain', {
        status: 'ok'
    })

  });
