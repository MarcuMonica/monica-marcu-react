export default (message = '', type = 'primary') => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', 'alert-dismissible', `alert-${type}`);
  const dismissButton = document.createElement('button');
  dismissButton.classList.add('btn-close');
  dismissButton.addEventListener('click', () => {
    messageContainer.remove();
  });

  //in loc de innerText putem folosi textContent
  messageContainer.textContent = message;
  messageContainer.append(dismissButton);

  return messageContainer;
};
