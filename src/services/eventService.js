import * as tokenService from './tokenService'
const BASE_URL = "/api/events/"

export function createEvent(event){
  return fetch(
    `${BASE_URL}createEvent`,
    {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(event)
    },
    { mode: "cors" })
    .then((res)=> res.json())
}

export function getAllEvents() {
  return fetch(
    `${BASE_URL}`, {
      method: "GET",
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
    }, {mode: "cors"}
  ).then(res => res.json())
}

export function deleteEvent(id){
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
    },
    { mode: "cors" })
  .then((res) => res.json())
  
}

export function editEvent(id, formData){
  console.log("test2")
  return fetch(`${BASE_URL}${id}/edit`, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + tokenService.getToken(), "content-type": "application/json" },
    body: JSON.stringify(formData),
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}

export function addComment(formData, id) {
  return fetch(`${BASE_URL}${id}`, {
  method: "POST",
    headers: { Authorization: "Bearer " + tokenService.getToken(), "content-type": "application/json" },
    body: JSON.stringify(formData),
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}