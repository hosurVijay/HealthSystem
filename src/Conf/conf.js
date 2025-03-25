const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwriteDatabaseID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwriteUserCollectionID: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    appwritePatientDetailsCollectionID: import.meta.env.VITE_APPWRITE_PATIENT_DETAILS_COLLECTION_ID,
    appwritePatientRecordCollectionID: import.meta.env.VITE_APPWRITE_PATIENT_RECORDS_COLLECTION_ID,
}

export default conf;
