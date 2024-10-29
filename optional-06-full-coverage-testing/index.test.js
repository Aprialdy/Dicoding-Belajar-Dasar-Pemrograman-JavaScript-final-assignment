import sum from './index.js';
import {test} from 'node:test';
import assert from 'node:assert';

test ('Pengujian fungsi sum', () => {
        assert.strictEqual(sum(2,'a'), 0);
        assert.strictEqual(sum(1,5), 6);
        assert.strictEqual(sum(-1,0), 0);
});