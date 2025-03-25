import { Client, ID, Account } from "appwrite"
import conf from '../Conf/conf'

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client 
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async CreateAccount({email, password, id}) {
        try {
            const userData = await this.account.create(ID.unique(), email, password);
            if(userData) {
                
            }else {
                return userData
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}) {
        try {
            return this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async logout() {
        try {
            await this.account.deleteSession();
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            throw error
        }
    }

}

const authservice  = new AuthService()
export default authservice;
