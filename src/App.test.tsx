/**
 * @jest-environment node
 */
// my-broken-node-only-test.js
import App from './App';
import Login from './components/Login';
import React from 'react';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node'
import { fireEvent, screen,render } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from './utils/test-utils'

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get('https://newsapi.org/v2/everything?q=World&apiKey=', async () => {
    await delay(150)
    return HttpResponse.json('ok')
  })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('login action', async () => {
  renderWithProviders(<Login />)

  // should show no user initially, and not be fetching a user
  //expect(screen.getByText(/no user/i)).toBeInTheDocument()
  expect(screen.findByText(/The API Key that you've entered is incorrect\./i)).not.toBeInTheDocument()

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  fireEvent.click(screen.getByRole('button', { name: /Sign In/i }))
  expect(await screen.findByText(/The API Key that you've entered is incorrect\./i)).not.toBeInTheDocument()
  // after some time, the user should be received
  //expect(await screen.findByText(/John Smith/i)).toBeInTheDocument()
  //expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
 // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
})

// test('renders learn react link', () => {
//   render(<Login />);
//   const linkElement = screen.getByText(/NEWS/i);
//   expect(linkElement).toBeInTheDocument();
// });
