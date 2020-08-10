/**
 * Export this module as default
 */
export default class NotificationView {
  private notification: Element;

  private dismiss: Element;

  private notificationContent: Element;

  private notificationDescription: Element;

  constructor() {
    this.notification = document.querySelector('.notification');
    this.dismiss = document.querySelector('.dismiss');
    this.notificationContent = document.querySelector('.notification__content');
    this.notificationDescription = document.querySelector('.notification__description');
  }

  /**
   * Show notification
   */
  showNotification(type, content) {
    const notification = this.notification as HTMLElement;
    this.notificationContent.classList.add(`notification--${type}`);
    notification.style.display = 'block';
    this.notificationDescription.innerHTML = content;
  }

  /**
   * Hide notification
   */
  hideNotification() {
    this.notification.removeAttribute('style');
    this.notificationDescription.innerHTML = '';
  }

  /**
   * Events handling
   *
   * @param {Object} controller
   */
  bindEventListeners(controller) {
    this.dismiss.addEventListener('click', () => {
      console.log('ajo');
      controller.dismissNotication();
    });

    this.notification.addEventListener('mouseenter', () => {
      controller.mouseEnterNotificationState();
    });

    this.notification.addEventListener('mouseleave', () => {
      controller.mouseLeaveNotificationState();
    });
  }
}
