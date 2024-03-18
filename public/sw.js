self.addEventListener('message', function(event) {
    if (event.data) {
      self.registration.showNotification('Notification Title');
    }
  });
  