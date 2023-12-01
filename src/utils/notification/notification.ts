import PushNotification from 'react-native-push-notification';
import { storage } from '@/utils/storage/storage';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export const notification = () => {
  const init = () => {
    return messaging().registerDeviceForRemoteMessages();
  };

  const getDeviceToken = () => {
    return messaging().getToken();
  };

  const setDeviceToken = (token: string) => {
    return storage.set('deviceToken', token);
  };

  const clearDeviceToken = () => {
    return storage.set('deviceToken', null);
  };

  const requestPermission = async () => {
    const status = await messaging().requestPermission();
    const enabled =
      status === messaging.AuthorizationStatus.AUTHORIZED || status === messaging.AuthorizationStatus.PROVISIONAL;

    return enabled;
  };

  const showIOSNotification = (
    message: FirebaseMessagingTypes.Notification,
    data: FirebaseMessagingTypes.RemoteMessage['data']
  ) => {
    PushNotificationIOS.addNotificationRequest({
      id: '0',
      title: message.title,
      body: message.body,
      userInfo: data,
    });
  };

  const showANDROIDNotification = (
    message: FirebaseMessagingTypes.Notification,
    data: FirebaseMessagingTypes.RemoteMessage['data']
  ) => {
    if (!message.body) {
      return;
    }

    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: 'com.daedongbread', // (required) channelId, if the channel doesn't exist, notification will not trigger.
      showWhen: true, // (optional) default: true
      autoCancel: true, // (optional) default: true
      color: '#FFF1EC',
      // largeIcon: 'ic_notification', // (optional) default: "ic_launcher". Use "" for no large icon.
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
      // bigLargeIcon: 'ic_notification',
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      priority: 'high', // (optional) set notification priority, default: high
      visibility: 'private', // (optional) set notification visibility, default: private
      ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
      shortcutId: 'shortcut-id', // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
      onlyAlertOnce: false, // (optional) alert will open only once with sound and notify, default: false

      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      messageId: 'google:message_id', // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module.

      /* iOS only properties */

      /* iOS and Android properties */
      id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: message.title, // (optional)
      message: message.body, // (required)
      userInfo: data,
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    });
  };

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'com.daedongbread',
        channelName: '대동빵지도',
      },
      () => {}
    );
  };

  return {
    init,
    requestPermission,
    getDeviceToken,
    setDeviceToken,
    clearDeviceToken,
    showIOSNotification,
    showANDROIDNotification,
    createChannel,
  };
};
