import {sum} from './index.js';
import {test} from 'node:test';
import assert from 'node:assert';

test ('Pengujian fungsi sum', () => {
        assert.strictEqual(sum(2,3), 5);
        assert.strictEqual(sum(-1,5), 4);
        assert.strictEqual(sum(0,0), 0);
});