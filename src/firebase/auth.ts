import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

export const getFirebase = (config: Object) => {

    firebase.initializeApp(config);
    firebase.analytics();
    return firebase;
};



