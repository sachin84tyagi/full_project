//import firebase from './firebasedb';
import firebase from './firebasedb';

export default class dbFactory {
    static create(dbName) {
        switch (dbName) {
            case 'firebase':
                return firebase;

            default:
                return firebase;
        }
    }
}