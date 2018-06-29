import { moduleFor, test } from 'ember-qunit';

moduleFor('route:preprints/provider/settings', 'Unit | Route | preprints/provider/settings', {
    // Specify the other units that are required for this test.
    needs: [
        'service:metrics',
        'service:session',
    ],
});

test('it exists', function(assert) {
    const route = this.subject();
    assert.ok(route);
});
