import type { DocumentDataService } from './document';
import type { LexiconDataService } from './lexicon';
import type { TenantDataService } from './tenant';
import type { UserDataService } from './user';
export type DataService = TenantDataService & UserDataService & LexiconDataService & DocumentDataService;
export type DataResult = {
    status: number;
    data: Array<any> | any | null;
    error: boolean;
    message: string;
};
export type Filter = {
    statementType: 'equalOp' | 'greaterOp' | 'greaterOrEqualOp' | 'lessOp' | 'lessOrEqualOp' | 'differentOp' | 'isOp' | 'isNotOp' | 'inOp' | 'notInOp' | 'likeOp' | 'notLikeOp' | 'isNullOp' | 'betweenOp' | 'andOp' | 'orOp' | 'notOp';
    field?: string;
    value?: {
        type: 'string' | 'number' | 'int' | 'boolean' | 'bit' | 'date';
        data: any;
    };
    lowerValue?: {
        type: string;
        data: any;
    };
    higherValue?: {
        type: string;
        data: any;
    };
    leftStatement?: Filter;
    rightStatement?: Filter;
};
