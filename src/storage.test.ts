import {describe,it,expect} from 'vitest';import {escapeHtml} from './storage';describe('safe print output',()=>it('escapes markup',()=>expect(escapeHtml('<script>')).toBe('&lt;script&gt;')));
