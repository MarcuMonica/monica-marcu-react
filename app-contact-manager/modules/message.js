export default (message = '', type = 'primary') => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', `alert-${type}`);

  //in loc de innerText putem folosi textContent
  messageContainer.textContent = message;

  return messageContainer;
};
