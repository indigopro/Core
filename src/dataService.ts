import type {DocumentDataService} from './document'
import type {LexiconDataService} from './lexicon'
import type {TenantDataService} from './tenant'
import type {UserDataService} from './user'
import type {AuthenticationDataService} from './authentication'

export type DataService = TenantDataService & UserDataService & LexiconDataService & DocumentDataService

export type DataResult = {
  status: number
  data:  any | Array<any>  | null | { error: boolean, message: string | any }
}