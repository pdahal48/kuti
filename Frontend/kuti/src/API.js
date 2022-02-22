import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export class API {
  // the token to interact with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  //Jweleries

  /** Gets all the jweleries form the database */
  static async getJweleries() {
    let res = await this.request(`jweleries`);
    return res.jweleries;
  }

  //Sarees Routes

  //Get all the sarees from the database
  static async getSarees() {
    let res = await this.request(`sarees`);
    return res;
  }

  //Get individual saree from the database using the id provided
  static async getSaree(id) {
    let res = await this.request(`sarees/${id}`);
    return res.saree;
  }

  static async getLahengas() {
    let res = await this.request(`lahengas`);
    return res.lahengas;
  }

  //Customer Auths
  static async signup(customerObj) {
    try {
      let res = await this.request(`customers`, customerObj, "post");
      return res;
    } catch(e) {
      return {error: e};
    }
  }

  /** Logs in the user */
  static async login(data) {
  let res = await this.request(`customers/login`, data, "post");
  return res.token;
  }

  //grabs individual user
  static async get(name) {
    let res = await this.request(`customers/${name}`);
    return res;
  }

    //Seller Auths
    static async signupSeller(sellerObj) {
      try {
        let res = await this.request(`sellers`, sellerObj, "post");
        return res;
      } catch(e) {
        return {error: e};
      }
    }
  
    /** Logs in the seller */
    static async loginSeller(data) {
    let res = await this.request(`sellers/login`, data, "post");
    return res.token;
    }
  
    //grabs individual seller
    static async getSeller(name) {
      let res = await this.request(`sellers/${name}`);
      return res;
    }

    //Uploading items endpoint
    static async uploadLahenga(data) {
      let res = await this.request(`lahengas`, data, "post");
      return res;
    }

    //uploading images to AWS
    static async getImageUrl(){
      let res = await this.request(`customers/s3Url`);
      return res;
    }

    // post the image direclty to the s3 bucket
    static async postImageToS3({url, imageFile}) {
      await fetch(url, {
        method: "PUT",
        headers: {      
        "Content-Type": "multipart/form-data"
        },
        body: imageFile
    })
  }

  //UPLOADING THE LINKS TO THE LOCAL DATABABSE
  static async uploadLahengaToDB(saree_id, url){
    let res = await this.request(`customers/uploadImages`, saree_id, url, "post");
    return res;
  }
}