const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/location/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/location`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/location/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  post(newLocation) {
    return fetch(`${remoteURL}/location`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
    }).then(data => data.json())
}
}