import { trace } from "@opentelemetry/api";

const tracer = trace.getTracer("unit-service");

export async function verifyUnit(unitId){
    return tracer.startActiveSpan("verifyUnit", async(span)=>{
        try {
           const ownershipChain = ['A', 'B', 'C'];
           span.setAttribute('unit.id', unitId);
           span.setAttribute('unit.ownershipChain.length', ownershipChain.length);

           await new Promise((res)=>setTimeout(res,100));

           return{
            unitId,verified: true
           }
        } catch (error) {
            span.recordException(error);
            span.setStatus({code: 2});
            throw error;
        } finally{
            span.end();
        }
    })
}