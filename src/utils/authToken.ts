type UserType = 'admin' | 'client';
export const setToken = (token: string, expires_in: number, type: UserType) => {
  const d = new Date()
  d.setTime(d.getTime() + expires_in * 1000)
  let expires = 'expires=' + d.toUTCString()
  document.cookie = `token_${type}=` + token + ';' + expires + ';path=/'
}
export const getToken = (type: UserType) => {
  let token = getCookie(`token_${type}`)
  return token
}

export const removeToken = (type: UserType) => {
  if (type) {
    document.cookie = `token_${type}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    return
  }
  document.cookie = `token_admin=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
  document.cookie = `token_client=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

function getCookie(cname: string) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
