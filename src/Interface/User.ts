export interface IUser {
  login: string;
  password: string;
  email: string;
}

export interface IAuth {
	login: string
	password: string
	expiresInMins?: number 
}

export interface IResponseAuth{
  "id": number,
  "username": string,
  "email": string,
  "firstName": string,
  "lastName": string,
  "gender": string,
  "image": string,
  "accessToken": string,
  "refreshToken": string 
}