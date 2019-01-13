import { Permissions, Notifications } from 'expo';
import axios from 'axios';

export default async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    let token = await Notifications.getExpoPushTokenAsync();

    return new Promise((resolve,reject) => {
        if(token !== undefined)
            resolve(token);
        else
            reject("Error");
    })
}
