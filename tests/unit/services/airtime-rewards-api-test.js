import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | airtime-rewards-api', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:airtime-rewards-api');
    assert.ok(service);
  });
});
