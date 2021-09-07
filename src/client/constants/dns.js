export const cloudflare = {
  name: 'Cloudflare',
  value: '1.1.1.1, 1.0.0.1'
}

export const google = {
  name: 'Google',
  value: '8.8.8.8, 8.8.4.4'
}

export const freenom = {
  name: 'Freenom',
  value: '80.80.80.80, 80.80.81.81'
}

export const defaultDns = cloudflare

export default [cloudflare, google, freenom]
