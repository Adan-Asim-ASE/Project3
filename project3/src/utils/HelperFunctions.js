export default function getCookie(name) {
  // eslint-disable-next-line prefer-const
  let cookieArr = document.cookie.split(';');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cookieArr.length; i++) {
    // eslint-disable-next-line prefer-const
    let cookiePair = cookieArr[i].split('=');

    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
