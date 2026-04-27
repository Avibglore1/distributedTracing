import {test} from "node:test";
import assert from "node:assert";

import { InMemorySpanExporter, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { trace } from "@opentelemetry/api";

import { verifyUnit } from "../services/unit.service.js";

test(`verifyUnit creates span with attributes`, async()=>{
    const exporter = new InMemorySpanExporter();
    const provider = trace.getTracerProvider();

    await verifyUnit("123");

    const spans = exporter.getFinishedSpans();

    const span = spans.find(s=>s.name==='verifyUnit');

    assert.ok(span);
    assert.equal(span.attributes['unit.id'], '123');
})
