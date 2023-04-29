import { Actor } from 'apify';
import { print, sanitizeHtml } from 'shared';

(async () => {
  await Actor.init();

  const input = (await Actor.getInput()) as any;

  print('Actor 1', input?.message || 'No message provided');

  console.log(sanitizeHtml(`<div><p>Shared packages work!</p><script>alert('Shared packages work!')</script></div>`));

  await Actor.exit();
})();
