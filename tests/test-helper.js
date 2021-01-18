import Application from 'airtime-rewards/app';
import config from 'airtime-rewards/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
