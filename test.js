var tlog = require('./index');

tlog('[D] this is a `%s` message.', 'debug');
tlog('[E] this is a `%s` message.', 'error');
tlog('[I] this is a `%s` message.', 'info');
tlog('[W] this is a `%s` message.', 'warning');
tlog('[N] this is a `%s` message.', 'notice');