import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../slices/authSlice';
import { IAuth, IResponseAuth } from '../../Interface/User';

const host = 'https://dummyjson.com'

const bodyAuth = {
	login: 'jamesd',
	password: 'jamesdpas',
	expiresInMins: 30,
}

export async function signInUser({
	login,
	password,
	expiresInMins = 60,
}: IAuth): Promise<IResponseAuth> {
	const res = await fetch(`${host}/user/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			username: login,
			password: password,
			expiresInMins: expiresInMins,
		}),
	})
	const result = await res.json()
	return result
}
const baseQuery = fetchBaseQuery ({
  baseUrl: `${host}`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token') ;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers;
  },
})

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery (args, api, extraOptions);
  if (result.data) {
    api.dispatch(setAuth (true));
  }
  if (result.error && result.error.status === 401) {
    localStorage.setItem('token', '')
		api.dispatch(setAuth(false))
    // const refreshResult =  signInUser({
		// 	login: bodyAuth.login,
		// 	password: bodyAuth.password,
		// 	expiresInMins: bodyAuth.expiresInMins,
		// })
    // if (refreshResult) {
    //   localStorage.setItem('token', (await refreshResult).accessToken);
    //   api.dispatch(setAuth(true)) ;
    //   // retry the initial query
    //   result = await baseQuery (args, api, extraOptions);
    // } else {
    //   api.dispatch(setAuth (false) );
    //   //document. location.href = 'http://localhost:5173/';
    // }
  }
  return result;
};

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({
		infoUser: builder.query({
			query: () => ({
				url: 'user/me',
				method: 'GET',
				// credentials: 'include',
			}),
		}),
	}),
})

export const { useInfoUserQuery } = userApi
