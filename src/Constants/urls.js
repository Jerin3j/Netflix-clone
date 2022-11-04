import {API_KEY} from '../Constants/constants'

export const originals=`/discover/tv?api_key=${API_KEY}&with_networks=213`
export const actions=`discover/movie?api_key=${API_KEY}&with_genres=28`
export const dramas =`discover/movie?api_key=${API_KEY}&with_genres=18&vote_count.gte=10`
export const childrens =`discover/movie?api_key=${API_KEY}&with_genres=16&include_adult=false&include_video=true&sort_by=popularity.desc` 
export const horrors =`discover/movie?api_key=${API_KEY}&with_genres=27`
export const comedies =`discover/movie?api_key=${API_KEY}&with_genres=35`
export const documentries =`discover/movie?api_key=${API_KEY}&with_genres=99`
export const romantics =`discover/movie?api_key=${API_KEY}&with_genres=10749`
