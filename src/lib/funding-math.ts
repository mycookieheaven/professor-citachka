// Fictional teaching inputs, not offers, eligibility thresholds or APR disclosures.
const gross=50000, fees=2500, factor=1.3, days=100;
const net=gross-fees,purchased=gross*factor,daily=purchased/days,week=daily*5;
const weeklyRoom=12000-8500,stressRoom=10800-8500;
const consolidationOld=3000*12,consolidationNew=1500*28;
const layerOut=7000+4000;
const invoiceAdvance=20000*0.8,invoiceFee=20000*0.03;
const renewalNet=40000-20000-2500,renewalTotal=40000*1.3;
export const fundingNumbers={gross,fees,factor,days,net,purchased,daily,week,costOverNet:purchased-net,twentyDays:daily*20,twentyThreeDays:daily*23,remitBase:4000*0.1,remitDown:3000*0.1,weeklyRoom,weeklyResidual:weeklyRoom-week,stressRoom,stressResidual:stressRoom-week,consolidationOld,consolidationNew,consolidationRelief:3000-1500,consolidationExtra:consolidationNew-consolidationOld,layerOut,layerNet:layerOut-6500,layerMissing:layerOut-0,invoiceAdvance,invoiceFee,invoiceReserve:20000-invoiceAdvance-invoiceFee,invoiceNet:20000-invoiceFee,lineAvailable:50000-22000,lineInterest:24000*0.12*30/360,coverage:9000/6000,stressCoverage:5400/6000,balloon:30000-500*20,equipmentTotal:10000+1000*48+2000,renewalNet,renewalTotal,incrementalCost:renewalTotal-20000-renewalNet,weekEnd:2000-3000};
export const dollars=(amount:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(amount);
