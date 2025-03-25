import { Client, ID, Databases, Storage, Query } from 'appwrite';
import conf from '../Conf/conf';

export class PatientService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Fetch all patient records (uploaded by ESP32)
    async getAllPatientRecords() {
        try {
            const patientRecords = await this.databases.listDocuments(
                conf.appwriteDataBaseID,
                conf.appwritePatientRecordCollectionID
            );

            return patientRecords.documents; // Return all patient records
        } catch (error) {
            console.log("Error fetching all patient records:", error);
            throw error;
        }
    }

    // Add a new patient record manually (e.g., by a nurse or doctor)
    async createPatientRecord({ patientID, heartRate, temperature, spo2, timestamp }) {
        try {
            const record = await this.databases.createDocument(
                conf.appwriteDataBaseID,
                conf.appwritePatientRecordCollectionID,
                ID.unique(), // Unique ID for the document
                {
                    patientID,
                    heartRate,
                    temperature,
                    spo2,
                    timestamp
                }
            );
            return record; // Return the created record
        } catch (error) {
            console.error("Error creating patient record:", error);
            throw error;
        }
    }

    // Discharge (delete) a patient record from the database
    async dischargePatient(patientID) {
        try {
            // Fetch the patient's record by patientID
            const patientRecord = await this.databases.listDocuments(
                conf.appwriteDataBaseID,
                conf.appwritePatientRecordCollectionID,
                [Query.equal("patientID", patientID)] // Fetch records by patientID
            );

            if (patientRecord.documents.length > 0) {
                const patientDocID = patientRecord.documents[0].$id;

                // Delete the patient's record from the database
                await this.databases.deleteDocument(
                    conf.appwriteDataBaseID,
                    conf.appwritePatientRecordCollectionID,
                    patientDocID
                );

                return "Patient record deleted successfully.";
            } else {
                return "Patient not found.";
            }
        } catch (error) {
            console.log("Error discharging (deleting) patient:", error);
            throw error;
        }
    }

    // Fetch the current logged-in user details
    async getUserDetails() {
        try {
            const user = await this.databases.listDocuments(
                conf.appwriteDataBaseID,
                conf.appwriteUserCollectionID
            );

            return user.documents; // Return the list of users (e.g., nurses, doctors)
        } catch (error) {
            console.log("Error fetching user details:", error);
            throw error;
        }
    }

    // File upload services (if needed for reports or images)
    async uploadFile(file) {
        try {
            const uploadedFile = await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            );
            return uploadedFile;
        } catch (error) {
            console.log("Error uploading file:", error);
            throw error;
        }
    }

    // Delete file
    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketID, fileID);
            return true;
        } catch (error) {
            console.log("Error deleting file:", error);
            throw error;
        }
    }
}

const patientService = new PatientService();
export default patientService;
