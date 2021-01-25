import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | chart/trend-by-demographic-gender', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Chart::TrendByDemographicGender />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Chart::TrendByDemographicGender>
        template block text
      </Chart::TrendByDemographicGender>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
