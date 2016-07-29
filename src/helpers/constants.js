let HOST;

if(process.env.NODE_ENV === 'development'){
  HOST = 'http://localhost:3000'
} else{
  HOST = window.location.origin
}

export const host = HOST;

export const socket = io(HOST);
