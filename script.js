function showContactOptions() {
  const options = `
    <div id='popup'>
      <a href='tel:+33123456789'>Appeler</a><br>
      <a href='sms:+33123456789'>Envoyer un SMS</a><br>
      <button onclick='closePopup()'>Fermer</button>
    </div>
    <div id='overlay' onclick='closePopup()'></div>
  `;
  document.body.insertAdjacentHTML('beforeend', options);
}

function closePopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  if (popup) popup.remove();
  if (overlay) overlay.remove();
}