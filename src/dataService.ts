import type {DocumentDataService} from './document'
import type {LexiconDataService} from './lexicon'
import type {TenantDataService} from './tenant'
import type {UserDataService} from './user'

export type DataService = TenantDataService & UserDataService & LexiconDataService & DocumentDataService

export type DataResult = {
  status: number
  data: Array<any> | any | null
  error: boolean
  message: string
}

export type Filter = {
  statementType: 'equalOp' | 'greaterOp' | 'greaterOrEqualOp' | 'lessOp' | 'lessOrEqualOp' | 'differentOp' | 'isOp' | 'isNotOp' | 'inOp' | 'notInOp' | 'likeOp' | 'notLikeOp' | 'isNullOp' | 'betweenOp' | 'andOp' | 'orOp' | 'notOp'

  // predicate
  field?: string
  value?: {type: 'string' | 'number' | 'int' | 'boolean' | 'bit' | 'date'; data: any}
  lowerValue?: {type: string; data: any}
  higherValue?: {type: string; data: any}

  // logicalOperation
  leftStatement?: Filter
  rightStatement?: Filter
}

//  Example Filter
//  {
//     "operator": "and",
//     "leftStatement": {
//         "operator": "=",
//         "value": {
//             "type": "String",
//             "data": "2020"
//         },
//         "fieldRef": {
//             "name": "season"
//         },
//         "statementType": "EqualOp"
//     },
//     "rightStatement": {
//         "operator": "or",
//         "leftStatement": {
//             "operator": ">",
//             "value": {
//                 "type": "DateTime",
//                 "data": "2020-05-21T00:00:00"
//             },
//             "fieldRef": {
//                 "name": "startDate"
//             },
//             "statementType": "GreaterOp"
//         },
//         "rightStatement": {
//             "operator": "like",
//             "value": {
//                 "type": "String",
//                 "data": "07%"
//             },
//             "fieldRef": {
//                 "name": "eventCode"
//             },
//             "statementType": "LikeOp"
//         },
//         "statementType": "OrOp"
//     },
//     "statementType": "AndOp"
// }
