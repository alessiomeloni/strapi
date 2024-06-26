'use strict';

/**
 * personalization service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personalization.personalization');
