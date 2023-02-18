export type SMPPSettings = {
  enabled: boolean
  endpointURL: string
  productToken: string
  allowedChannels: Array<string>
  sender: string
  bodyType?: 'auto'
}

export type SMSParameters = {
  message: string
  phoneNumber: string
}