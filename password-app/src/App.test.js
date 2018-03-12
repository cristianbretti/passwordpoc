import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//This should be implemented with mocks instead! To do the test with an actual fetch is risky
//but I didn't have time to do a mock test.
describe('get data using Promises', () => {
  it('should fetch all the data', () => {
    return fetch("https://kodprov.herokuapp.com/")
    .then(response => {
      expect(response).toBeDefined()
      return response.json()
    }).then(data => {
    	expect(data.length).toEqual(62)
    })
  })

  it('First data is google.com', () => {
    return fetch("https://kodprov.herokuapp.com/")
    .then(response => {
      expect(response).toBeDefined()
      return response.json()
    }).then(data => {
    	expect(data[0].site).toEqual("google.com")
    })
  })
})
