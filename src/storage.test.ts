import {describe,it,expect} from 'vitest';
import {escapeHtml,validatePlan,parsePlanBackup} from './storage';
const sample={id:'p1',title:'Test plan',created:'2026-11-05',updated:'2026-11-05',notes:{},statuses:{},entries:[],reviews:[],history:[]};
describe('backup safety',()=>{
 it('escapes HTML in printable output',()=>expect(escapeHtml('<script>')).toBe('&lt;script&gt;'));
 it('accepts valid plan backups',()=>expect(validatePlan(sample).title).toBe('Test plan'));
 it('rejects incomplete backups',()=>expect(()=>validatePlan({id:'p1',title:'Test'})).toThrow());
 it('rejects invalid record data',()=>expect(()=>validatePlan({...sample,entries:[{id:'a',kind:'evidence',title:'Test',task:0,updated:'now',data:{summary:{unsafe:true}}}]})).toThrow());
 it('rejects malformed JSON',()=>expect(()=>parsePlanBackup('{bad')).toThrow());
});
