require('module-alias/register');
const logger = require('@alias/logger')('growi:migrate:remove-crowi-classic-behavior');


module.exports = {
  async up(db) {
    logger.info('Apply migration');
    logger.info('Migration has successfully applied');
  },

  down(db) {
    // do not rollback
  },
};
