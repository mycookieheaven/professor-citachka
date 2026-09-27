import {expect,it} from 'vitest';
import {fundingNumbers as n} from './funding-math';
it('computes every fictional merchant cash-flow illustration without presenting APR',()=>{
 expect(n).toMatchObject({gross:50000,fees:2500,net:47500,factor:1.3,purchased:65000,costOverNet:17500,daily:650,days:100,week:3250,twentyDays:13000,twentyThreeDays:14950,remitBase:400,remitDown:300,weeklyRoom:3500,weeklyResidual:250,stressRoom:2300,stressResidual:-950,consolidationOld:36000,consolidationNew:42000,consolidationRelief:1500,consolidationExtra:6000,layerOut:11000,layerNet:4500,layerMissing:11000,invoiceAdvance:16000,invoiceFee:600,invoiceReserve:3400,invoiceNet:19400,lineAvailable:28000,lineInterest:240,coverage:1.5,stressCoverage:0.9,balloon:20000,equipmentTotal:60000,renewalNet:17500,renewalTotal:52000,incrementalCost:14500,weekEnd:-1000});
 expect(Object.keys(n).some(k=>/apr/i.test(k))).toBe(false);
});
