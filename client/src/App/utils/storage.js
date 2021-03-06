import React from "react";

export function getFromStorage(key) {
    if (!key) {
        return null
    }

    try {
        const valueStr = localStorage.getItem(key)
        if (valueStr) {
            return JSON.parse(valueStr)
        }
        return null
    } catch (e) {
        return null
    }
}

export function setInStorage(key, obj) {
    if (!key) {
        console.log('Error: Key is missing')
    }

    try {
        localStorage.setItem(key, JSON.stringify(obj))
    } catch (e) {
        console.log(e)
    }
}

export function getUserFromToken(token) {
    const url = '/api/markers/user?token=' + token;
    return fetch(url)
        .then(res => res.json())
        .then(function (json) {
            return json;
        })
}