import { render } from './addContact.js';
import { clearMessages } from './notificationBar.js';
//default exports can be renamed
import tazz, { clearStage } from './stage.js';

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', (event) => {
  clearMessages();
  clearStage();

  tazz.append(render());
});

export default addContactButton;
