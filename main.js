'use strict';

const customerDirectory = document.querySelector('.customer-directory');

customers.forEach(customer => {
  // Pull and format data needed from customer
  const picture = customer.picture.large;
  const fullName = `${
    customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1)
  } ${
    customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1)
  }`;
  const email = customer.email;
  const address = `
    ${customer.location.street.number} ${customer.location.street.name}
    ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${
    customer.location.postcode
  }
  `;
  const dob = `DOB: ${moment(customer.dob.date).format('MMM DD, YYYY')}`;
  const customerSince = `Customer since: ${moment(customer.dob.date).format(
    'MMM DD, YYYY'
  )}`;

  console.log(fullName, email, picture);
  console.log(dob);
  console.log(customerSince);
  console.log(address);

  let card = document.createElement('div');
  card.classList.add('card', 'm-3');

  // create and add profile picture
  let img = document.createElement('img');
  img.src = picture;
  img.classList.add('card-img-top');
  card.appendChild(img);

  // All the other properties will be added to this card body
  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  // Add full name
  let nameEl = document.createElement('h4');
  nameEl.classList.add('card-title');
  nameEl.innerText = fullName;
  cardBody.appendChild(nameEl);

  let emailEl = document.createElement('h6');
  emailEl.classList.add('card-subtitle', 'mb-2', 'text-muted');
  emailEl.innerText = email;
  cardBody.appendChild(emailEl);

  let listGroup = document.createElement('ul');
  listGroup.classList.add('list-group', 'list-group-flush');
  cardBody.appendChild(listGroup);

  let addressEl = document.createElement('li');
  addressEl.classList.add('list-group-item');
  addressEl.innerText = address;
  listGroup.appendChild(addressEl);

  let dobEL = document.createElement('li');
  dobEL.classList.add('list-group-item');
  dobEL.innerText = dob;
  listGroup.appendChild(dobEL);

  let customerSinceEl = document.createElement('li');
  customerSinceEl.classList.add('list-group-item');
  customerSinceEl.innerText = customerSince;
  listGroup.appendChild(customerSinceEl);

  // add the card to the customer directory to display
  customerDirectory.appendChild(card);
});
