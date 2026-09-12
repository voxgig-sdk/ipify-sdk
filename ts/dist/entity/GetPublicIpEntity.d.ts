import { IpifyEntityBase } from '../IpifyEntityBase';
import type { IpifySDK } from '../IpifySDK';
import type { Control } from '../types';
import type { GetPublicIp, GetPublicIpLoadMatch } from '../IpifyTypes';
declare class GetPublicIpEntity extends IpifyEntityBase<GetPublicIp> {
    constructor(client: IpifySDK, entopts: any);
    make(this: GetPublicIpEntity): GetPublicIpEntity;
    load(this: any, reqmatch?: GetPublicIpLoadMatch, ctrl?: Control): Promise<GetPublicIpEntity>;
}
export { GetPublicIpEntity };
