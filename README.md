# ChatterDash

## Synopsis

Thank you for taking the time to review my code! ChatterDash is a simple front end chat app that consumes the API in server.js. The client uses a proxy server with create-react-app pointing to localhost:8080. Enjoy!

## Installation

```sh
npm install
cd client && npm install
cd .. && npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see the app.

## Documentation

ChatterDash a single-page app that prioritizes minimal API calls, modularity, and a logical flow. The following structure documents how state and properties populate and interact with the app's components.

[App]
  [Login]
    [consumes: user-generated name]
    [generates: `user` and `time`]
    [children: null]
  [Main]
    [consumes: RoomsList API]
    [generates: `rooms`]
    [children: ]
      [Nav: ]
        [consume: `user`, `time`, `rooms`]
        [generates: `room` by UI]
      [ChatRoom: ]
        [consumes: `room`, `user`, RoomsDetail API]
        [generates: `roomInfo`]
        [children: ]
          [Header: ]
            [consumes: `roomInfo` and `user`]
            [generates: null]
            [children: null]
          [Messages: ]
            [consumes: Messages API (GET), `messages`]
            [generates: `messages`]
            [children: none]
          [Textbox: ]
            [consumes: Messages API (POST)]
            [generates: `messages` by UI]
            [children: none]

or

```sh
App: {
  Login: {
    consumes: user-generated name,
    generates: `user` and `time`,
    children: null
  },
  Main: {
    consumes: RoomsList API,
    generates: `rooms`,
    children: {
      Nav: {
        consume: `user`, `time`, `rooms`,
        generates: `room` by UI
      },
      ChatRoom: {
        consumes: `room`, `user`, RoomsDetail API,
        generates: `roomInfo`,
        children: {
          Header: {
            consumes: `roomInfo` and `user`,
            generates: null,
            children: null
          },
          Messages: {
            consumes: Messages API (GET), `messages`,
            generates: `messages`,
            children: none
          },
          Textbox: {
            consumes: Messages API (POST),
            generates: `messages` by UI,
            children: none
          },
        }
      }
    }
  }
}
```
## Tests

TBD

## New Features

TBD

## License

The MIT License (MIT)

Copyright (c) 2017 John Trecker

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.