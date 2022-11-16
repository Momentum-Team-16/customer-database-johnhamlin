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
  const dob = `DOB: ${moment(customer.dob.date).format('MMM D, YYYY')}`;
  const customerSince = `Customer since: ${moment(customer.dob.date).format(
    'MMM DD, YYYY'
  )}`;

  // Create card to contain all the info
  const card = document.createElement('div');
  card.classList.add('card', 'm-4', 'p-0', 'border-0');

  // Create card body where items will be added
  const cardBody = buildAndAppendElement('', card, 'div', ['card-body']);

  // Create and add profile picture
  const img = buildAndAppendElement('', cardBody, 'img', [
    'card-img-top',
    'rounded-circle',
    'mb-4',
  ]);
  img.src = picture;

  // Add full name
  buildAndAppendElement(fullName, cardBody, 'h3', ['card-title']);

  // Add email with link
  const emailLink = buildAndAppendElement('', cardBody, 'a', [
    'text-muted',
    'btn',
    // 'btn-link',
    'p-0',
  ]);
  emailLink.href = `mailto:${email}`;
  buildAndAppendElement(email, emailLink, 'h6', ['card-subtitle', 'mb-2']);

  // Add list to contain the rest of the info
  const listGroup = buildAndAppendElement('', cardBody, 'ul', [
    'list-group',
    'list-group-flush',
  ]);

  // Add address, DOB and Customer Since Date to list
  buildAndAppendElement(address, listGroup, 'li', ['list-group-item']);
  buildAndAppendElement(dob, listGroup, 'li', ['list-group-item']);
  buildAndAppendElement(customerSince, listGroup, 'li', ['list-group-item']);

  // Add the card to the customer directory to display
  customerDirectory.appendChild(card);
});

function buildAndAppendElement(text, parentElement, elementType, classesArr) {
  const newElement = document.createElement(elementType);
  if (classesArr) newElement.classList.add(...classesArr);
  newElement.innerText = text;
  parentElement.appendChild(newElement);
  return newElement;
}
