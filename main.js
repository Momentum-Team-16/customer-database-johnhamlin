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
  const address = `${customer.location.street.number} ${
    customer.location.street.name
  }
    ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${
    customer.location.postcode
  }`;
  const dob = `DOB: ${moment(customer.dob.date).format('MMM DD, YYYY')}`;
  const customerSince = `Customer since: ${moment(customer.dob.date).format(
    'MMM DD, YYYY'
  )}`;

  // Create card to contain all the info
  let card = document.createElement('div');
  card.classList.add('card', 'm-3', 'p-0');

  // Create and add profile picture
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

  // Add email
  let emailEl = document.createElement('h6');
  emailEl.classList.add('card-subtitle', 'mb-2', 'text-muted');
  emailEl.innerText = email;
  cardBody.appendChild(emailEl);

  // Add list to contain the rest of the info
  let listGroup = document.createElement('ul');
  listGroup.classList.add('list-group', 'list-group-flush');
  cardBody.appendChild(listGroup);

  // Add address to list
  let addressEl = document.createElement('li');
  addressEl.classList.add('list-group-item');
  addressEl.innerText = address;
  listGroup.appendChild(addressEl);

  // Add DOB to list
  let dobEL = document.createElement('li');
  dobEL.classList.add('list-group-item');
  dobEL.innerText = dob;
  listGroup.appendChild(dobEL);

  // Add Customer Since date to list
  let customerSinceEl = document.createElement('li');
  customerSinceEl.classList.add('list-group-item');
  customerSinceEl.innerText = customerSince;
  listGroup.appendChild(customerSinceEl);

  // Add the card to the customer directory to display
  customerDirectory.appendChild(card);
});
