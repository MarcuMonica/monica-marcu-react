import { addMessage, clearMessages } from './notificationBar.js';
import { findContact } from './query.js';
//omitem {} for default export
import render from './message.js';
import { pluralize } from './utils.js';
import stage, { clearStage } from './stage.js';
// do not ommit {} for named exports
import { render as renderContact } from './contact.js';

const searchForm = document.querySelector('.search-form');
//search-form input[name="q"]

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // currentTarget este elementul pe care am rulat addEventListener
  const form = event.currentTarget;
  const caseInput = form.caseInput;
  const queryInput = form.q;
  const options = {
    caseSensitive: caseInput.checked,
  };
  clearMessages();

  if (queryInput.value.length < 3) {
    addMessage(render('Your search must be at least 3 characters long'));
    return;
  }

  const contacts = findContact(queryInput.value.trim(), options);
  const contactsCount = contacts.length;
  const fragment = new DocumentFragment();

  contacts.forEach((contact) => {
    fragment.append(renderContact(contact));
  });

  if (contacts.length <= 0) {
    addMessage(render('No contacts found', 'warning'));
  } else {
    const petsCount = contacts.reduce((petsCount, contact) => {
      const { pets = [] } = contact;
      petsCount += pets.length;

      return petsCount;
    }, 0);

    addMessage(
      render(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })} with ${
          petsCount <= 0
            ? 'no pets'
            : pluralize(petsCount, {
                one: 'pet',
                many: 'pets',
              })
        }`,
        'success',
      ),
    );
  }

  queryInput.value = '';
  clearStage();
  stage.append(fragment);
});

export default searchForm;
